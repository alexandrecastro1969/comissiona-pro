import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: 'Nova mensagem do site',
      text: `
        Nome: ${body.nome}
        Email: ${body.email}
        Telefone: ${body.telefone}
        Mensagem: ${body.mensagem}
      `,
      html: `
        <h2>Nova mensagem do formulário de contato</h2>
        <p><strong>Nome:</strong> ${body.nome}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Telefone:</strong> ${body.telefone}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${body.mensagem}</p>
      `
    }

    const info = await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Erro completo:', {
      message: error?.message,
      stack: error?.stack,
      code: error?.code
    })

    return NextResponse.json(
      { error: error?.message || 'Erro ao processar mensagem' },
      { status: 500 }
    )
  }
}