'use client';

import { useState, KeyboardEvent, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
// @ts-ignore
import remarkGfm from 'remark-gfm';

// Definindo os tipos
type Message = {
    role: 'user' | 'assistant';
    content: string;
    timestamp: number;
};

export default function ChatInterface() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Função para rolar para a última mensagem
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // Rolar quando novas mensagens são adicionadas
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Carregar mensagens do localStorage ao iniciar
    useEffect(() => {
        const savedMessages = localStorage.getItem('chatMessages');
        if (savedMessages) {
            setMessages(JSON.parse(savedMessages));
        }
    }, []);

    // Salvar mensagens no localStorage quando houver mudanças
    useEffect(() => {
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    }, [messages]);

    const handleSendMessage = async () => {
        if (!message.trim() || isLoading) return;
        
        const userMessage: Message = {
            role: 'user',
            content: message.trim(),
            timestamp: Date.now()
        };

        setMessages(prev => [...prev, userMessage]);
        setMessage('');
        setIsLoading(true);

        try {
            const res = await fetch('/api/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage.content }),
            });

            const data = await res.json();
            
            const assistantMessage: Message = {
                role: 'assistant',
                content: data.response || data.message,
                timestamp: Date.now()
            };

            setMessages(prev => [...prev, assistantMessage]);
        } catch (error) {
            const errorMessage: Message = {
                role: 'assistant',
                content: 'Erro ao enviar mensagem. Tente novamente.',
                timestamp: Date.now()
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const clearHistory = () => {
        setMessages([]);
        localStorage.removeItem('chatMessages');
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            {/* Histórico de mensagens */}
            <div className="mb-4 space-y-4 max-h-[500px] overflow-y-auto">
                {messages.map((msg) => (
                    <div
                        key={msg.timestamp}
                        className={`p-3 rounded-lg ${
                            msg.role === 'user' 
                                ? 'bg-blue-100 ml-auto max-w-[80%]' 
                                : 'bg-gray-100 mr-auto max-w-[80%]'
                        }`}
                    >
                        {msg.role === 'user' ? (
                            <p className="whitespace-pre-wrap">{msg.content}</p>
                        ) : (
                            <div className="prose prose-sm max-w-none">
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    components={{
                                        strong: ({node, children}) => (
                                            <strong className="font-bold">{children}</strong>
                                        ),
                                        em: ({node, children}) => (
                                            <em className="italic">{children}</em>
                                        ),
                                        h1: ({node, children}) => (
                                            <h1 className="text-xl font-bold my-2">{children}</h1>
                                        ),
                                        h2: ({node, children}) => (
                                            <h2 className="text-lg font-bold my-2">{children}</h2>
                                        ),
                                        h3: ({node, children}) => (
                                            <h3 className="text-md font-bold my-2">{children}</h3>
                                        ),
                                        p: ({node, children}) => (
                                            <p className="my-2">{children}</p>
                                        ),
                                        ul: ({node, children}) => (
                                            <ul className="list-disc ml-4 my-2">{children}</ul>
                                        ),
                                        ol: ({node, children}) => (
                                            <ol className="list-decimal ml-4 my-2">{children}</ol>
                                        ),
                                        li: ({node, children}) => (
                                            <li className="my-1">{children}</li>
                                        ),
                                        code: ({className, children, ...props}: any) => {
                                            const match = /language-(\w+)/.exec(className || '');
                                            return (
                                                <code className="bg-gray-200 px-1 rounded" {...props}>
                                                    {children}
                                                </code>
                                            );
                                        },
                                        a: ({href, children}) => (
                                            <a 
                                                href={href}
                                                className="text-blue-600 hover:underline" 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {children}
                                            </a>
                                        ),
                                    }}
                                >
                                    {msg.content}
                                </ReactMarkdown>
                            </div>
                        )}
                        <small className="text-gray-500 text-xs block mt-2">
                            {new Date(msg.timestamp).toLocaleTimeString()}
                        </small>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex items-center space-x-2 text-gray-500">
                        <div className="animate-bounce">●</div>
                        <div className="animate-bounce delay-100">●</div>
                        <div className="animate-bounce delay-200">●</div>
                    </div>
                )}
                {/* Div de referência para auto-scroll */}
                <div ref={messagesEndRef} />
            </div>

            <form onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
            }} className="space-y-4">
                <div>
                    <textarea
                        id="chat-message"
                        name="chat-message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleKeyPress}
                        className="w-full p-2 border rounded-lg resize-none"
                        placeholder="Digite sua mensagem..."
                        rows={3}
                    />
                </div>
                <div className="flex justify-between items-center">
                    <button
                        type="button"
                        onClick={clearHistory}
                        className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                        Limpar Histórico
                    </button>
                    <button
                        type="submit"
                        disabled={isLoading || !message.trim()}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:opacity-50 hover:bg-blue-600 transition-colors"
                    >
                        {isLoading ? 'Enviando...' : 'Enviar'}
                    </button>
                </div>
            </form>
        </div>
    );
}