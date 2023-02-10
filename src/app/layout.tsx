import { ReactNode } from 'react'
import { SupabaseListener, SupabaseProvider, NavBarr } from '@/components'
import { supabase } from '@/utils'
import './globals.scss'

// do not cache this layout
export const revalidate = 0

export default async function RootLayout ({ children }: { children: ReactNode }) {
  const { data: { session } } = await supabase.auth.getSession()
  return (
    <html lang='en'>
      <head />
      <body>
        <div className='container'>
          <SupabaseProvider>
            <SupabaseListener serverAccessToken={session?.access_token} />
            <NavBarr />
            {children}
          </SupabaseProvider>
        </div>
      </body>
    </html>
  )
}
