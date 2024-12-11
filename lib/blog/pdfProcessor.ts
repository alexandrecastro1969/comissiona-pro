import pdf from 'pdf-parse'
import { readFile } from 'fs/promises'

export async function extractPdfContent(pdfPath: string) {
  try {
    const pdfBuffer = await readFile(pdfPath)
    const data = await pdf(pdfBuffer)
    
    // data.text contém todo o texto extraído do PDF
    return data.text
  } catch (error) {
    console.error('Erro ao processar PDF:', error)
    throw error
  }
}