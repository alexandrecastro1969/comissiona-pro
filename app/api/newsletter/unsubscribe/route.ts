import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')

    if (!token) {
      return NextResponse.json(
        { error: 'Token inválido' },
        { status: 400 }
      )
    }

    await prisma.newsletterSubscriber.update({
      where: { token },
      data: { active: false }
    })

    return NextResponse.json({ 
      message: 'Descadastrado com sucesso' 
    })
  } catch (error) {
    console.error('Erro ao processar descadastro:', error)
    return NextResponse.json(
      { error: 'Erro ao processar descadastro' },
      { status: 500 }
    )
  }
}