import { ReactNode } from 'react'
import SupabaseListener from '../components/supabase-listener'
import SupabaseProvider from '../components/supabase-provider'
import { createClient } from '../utils/supabase-server'
import { NavBarr } from '@/components'
import './globals.scss'

// do not cache this layout
export const revalidate = 0

export default async function RootLayout ({ children }: { children: ReactNode }) {
  const supabase = createClient()

  const {
    data: { session }
  } = await supabase.auth.getSession()

  return (
    <html lang='en'>
      <head />
      <body>
        <SupabaseProvider>
          <SupabaseListener serverAccessToken={session?.access_token} />
          <NavBarr />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  )
}
