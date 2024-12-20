import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import crypto from 'crypto'

const webhookSecret = process.env.BTCPAY_WEBHOOK_SECRET

export async function POST(request: Request) {
  const signature = headers().get('BTCPay-Sig')
  const body = await request.text()

  // Verify webhook signature
  const hmac = crypto
    .createHmac('sha256', webhookSecret || '')
    .update(body)
    .digest('hex')

  if (`sha256=${hmac}` !== signature) {
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 401 }
    )
  }

  const event = JSON.parse(body)

  // Handle different webhook events
  switch (event.type) {
    case 'InvoiceSettled':
      // Update order status
      console.log('Payment received for invoice:', event.invoiceId)
      break
    case 'InvoiceExpired':
      // Handle expired invoice
      console.log('Invoice expired:', event.invoiceId)
      break
    case 'InvoiceInvalid':
      // Handle invalid invoice
      console.log('Invoice invalid:', event.invoiceId)
      break
  }

  return NextResponse.json({ received: true })
}