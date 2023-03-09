import { NextResponse } from 'next/server'

export function middleware(req) {
  // Get a cookie
  const token = req.cookies.get('token')

  // Set a cookie
  // res.cookies.set('token', 'value', { maxAge: 60 * 60 })

  // Delete a cookie
  res.cookies.delete('token')

  return NextResponse.next()
}