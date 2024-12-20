import { NextResponse } from 'next/server'
import { createInvoice } from '@/lib/api/btcpay'

export async function POST(request: Request) {
  try {
    const { amount } = await request.json()
    const orderId = Math.random().toString(36).substring(7)
    
    const invoice = await createInvoice(amount, orderId)
    
    return NextResponse.json({ 
      checkoutUrl: invoice.checkoutLink,
      invoiceId: invoice.id 
    })
  } catch (error) {
    console.error('Failed to create invoice:', error)
    return NextResponse.json(
      { error: 'Failed to create invoice' },
      { status: 500 }
    )
  }
}