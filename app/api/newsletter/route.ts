import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Validação básica de email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Enviar email de confirmação
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Confirmação de Inscrição na Newsletter',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb;">Obrigado por se inscrever!</h1>
          <p>Sua inscrição em nossa newsletter foi confirmada com sucesso.</p>
          <p>Você receberá nossas próximas atualizações sobre comissionamento neste email.</p>
          <p style="margin-top: 20px;">Atenciosamente,<br>Equipe de Comissionamento</p>
        </div>
      `,
    })

    return NextResponse.json({ 
      message: 'Inscrição realizada com sucesso!' 
    })
  } catch (error) {
    console.error('Erro ao processar inscrição:', error)
    return NextResponse.json(
      { error: 'Erro ao processar sua inscrição' },
      { status: 500 }
    )
  }
}