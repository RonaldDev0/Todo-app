'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useSupabase } from './supabaseProvider'

export default function SupabaseListener ({ serverAccessToken }: { serverAccessToken?: string }) {
  const { supabase }: any = useSupabase()
  const router = useRouter()

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event: any, session: any) => {
      if (session?.access_token !== serverAccessToken) {
        router.refresh()
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [serverAccessToken, router, supabase])

  return null
}
