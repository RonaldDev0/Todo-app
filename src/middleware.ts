import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import type { Database } from './lib/database.types'

export async function middleware (req: NextRequest) {
  const res = NextResponse.next()

  const supabase = createMiddlewareSupabaseClient<Database>({ req, res })

  const { data: { session } }: any = await supabase.auth.getSession()
  // console.log('session: ', session)

  if (req.nextUrl.pathname.endsWith('/') && session?.user.role !== 'authenticated') {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  if (req.nextUrl.pathname.endsWith('/login') && session?.user.role === 'authenticated') {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return res
}
