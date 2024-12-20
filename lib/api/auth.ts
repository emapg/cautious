import { z } from 'zod'
import { jwtVerify, SignJWT } from 'jose'
import { cookies } from 'next/headers'

const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'your-secret-key')

export const UserSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  name: z.string(),
})

export type User = z.infer<typeof UserSchema>

export async function createToken(user: User): Promise<string> {
  return new SignJWT({ sub: user.id.toString(), email: user.email })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('24h')
    .sign(secret)
}

export async function verifyToken(token: string) {
  try {
    const verified = await jwtVerify(token, secret)
    return verified.payload
  } catch (err) {
    return null
  }
}

export async function getCurrentUser(): Promise<User | null> {
  const token = cookies().get('token')?.value

  if (!token) {
    return null
  }

  const payload = await verifyToken(token)
  if (!payload) {
    return null
  }

  // In a real app, fetch user data from your database
  return {
    id: parseInt(payload.sub as string),
    email: payload.email as string,
    name: 'John Doe',
  }
}