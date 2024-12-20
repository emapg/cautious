import { z } from 'zod'

const BTCPayConfig = {
  apiKey: process.env.BTCPAY_API_KEY,
  storeId: process.env.BTCPAY_STORE_ID,
  baseUrl: process.env.BTCPAY_URL,
}

const InvoiceSchema = z.object({
  id: z.string(),
  amount: z.number(),
  currency: z.string(),
  status: z.enum(['New', 'Processing', 'Settled', 'Expired']),
  checkoutLink: z.string(),
})

export type Invoice = z.infer<typeof InvoiceSchema>

export async function createInvoice(amount: number, orderId: string): Promise<Invoice> {
  const response = await fetch(`${BTCPayConfig.baseUrl}/api/v1/stores/${BTCPayConfig.storeId}/invoices`, {
    method: 'POST',
    headers: {
      'Authorization': `token ${BTCPayConfig.apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amount,
      currency: 'USD',
      metadata: {
        orderId,
      },
    }),
  })

  if (!response.ok) {
    throw new Error('Failed to create invoice')
  }

  const data = await response.json()
  return InvoiceSchema.parse(data)
}

export async function getInvoiceStatus(invoiceId: string): Promise<string> {
  const response = await fetch(`${BTCPayConfig.baseUrl}/api/v1/stores/${BTCPayConfig.storeId}/invoices/${invoiceId}`, {
    headers: {
      'Authorization': `token ${BTCPayConfig.apiKey}`,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to get invoice status')
  }

  const data = await response.json()
  return data.status
}