import { NextResponse } from 'next/server';

// Constantes para configuração
const MAX_MESSAGE_LENGTH = 4000;
const FETCH_TIMEOUT = 15000; // 15 segundos
const MAX_REQUESTS_PER_MINUTE = 10;

// Objeto simples para controle de rate limiting
const rateLimiter = {
    requests: new Map<string, number[]>(),
    isRateLimited: function(ip: string): boolean {
        const now = Date.now();
        const userRequests = this.requests.get(ip) || [];
        
        // Remove requisições mais antigas que 1 minuto
        const recentRequests = userRequests.filter(time => now - time < 60000);
        this.requests.set(ip, recentRequests);
        
        return recentRequests.length >= MAX_REQUESTS_PER_MINUTE;
    },
    addRequest: function(ip: string): void {
        const requests = this.requests.get(ip) || [];
        requests.push(Date.now());
        this.requests.set(ip, requests);
    }
};

export async function POST(request: Request) {
    try {
        // Verificar API key
        if (!process.env.OPENAI_API_KEY) {
            throw new Error('OPENAI_API_KEY não configurada');
        }

        // Obter IP do cliente
        const ip = request.headers.get('x-forwarded-for') || 'unknown';

        // Verificar rate limiting
        if (rateLimiter.isRateLimited(ip)) {
            return NextResponse.json(
                { message: 'Muitas requisições. Tente novamente em alguns minutos.' },
                { status: 429 }
            );
        }

        const { message } = await request.json();
        
        // Validação da mensagem
        if (!message || 
            typeof message !== 'string' || 
            message.length > MAX_MESSAGE_LENGTH) {
            return NextResponse.json(
                { message: 'Mensagem inválida ou muito longa' },
                { status: 400 }
            );
        }

        // Adicionar request ao rate limiter
        rateLimiter.addRequest(ip);

        // Criar controller para timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT);

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                ...(process.env.OPENAI_ORG_ID && {
                    'OpenAI-Organization': process.env.OPENAI_ORG_ID
                })
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    { 
                        role: "system", 
                        content: `Você é um especialista em comissionamento industrial da Comissiona Pro. 
                        Seu papel é fornecer informações precisas e relevantes sobre:
                        - Comissionamento industrial
                        - Serviços de comissionamento
                        - Processos industriais
                        - Segurança industrial
                        - Gestão de projetos industriais
                        - Qualidade e conformidade em projetos industriais

                        Se o usuário fizer perguntas não relacionadas a estes temas, 
                        responda educadamente que você é especializado em assuntos de 
                        comissionamento industrial e serviços da Comissiona Pro, e 
                        sugira que ele faça perguntas relacionadas a estes temas.

                        Mantenha suas respostas profissionais, técnicas e focadas no contexto industrial.`
                    },
                    { role: "user", content: message }
                ],
                max_tokens: 500,
                temperature: 0.7
            }),
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(`OpenAI API respondeu com status: ${response.status}. ${JSON.stringify(errorData)}`);
        }

        const data = await response.json();
        const botResponse = data.choices[0]?.message?.content;

        if (!botResponse) {
            throw new Error('Resposta inválida da API');
        }

        return NextResponse.json({ response: botResponse });
    } catch (error: unknown) {
        console.error('Erro:', error);
        
        // Tratamento específico para timeout
        if (error instanceof Error && error.name === 'AbortError') {
            return NextResponse.json(
                { message: 'Tempo limite de resposta excedido' },
                { status: 504 }
            );
        }

        return NextResponse.json(
            { message: 'Erro no servidor: ' + (error instanceof Error ? error.message : 'Erro desconhecido') },
            { status: 500 }
        );
    }
}