import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from './lib/api/auth'

const publicPaths = ['/', '/login', '/register', '/products']

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const isPublicPath = publicPaths.includes(request.nextUrl.pathname)

  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (token) {
    const payload = await verifyToken(token)
    if (!payload && !isPublicPath) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}