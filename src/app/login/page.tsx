'use client'

import { useSupabase } from '@/components/supabaseProvider'
import style from './style.module.scss'

// Supabase auth needs to be triggered client-side
export default function Login () {
  const { supabase }: any = useSupabase()

  const handleGitHubLogin = async () => { await supabase.auth.signInWithOAuth({ provider: 'github' }) }
  const handleLogout = async () => { await supabase.auth.signOut() }

  return (
    <div className={style.container}>
      <button onClick={handleGitHubLogin} className={style.login}>GitHub Login</button>
      <button onClick={handleLogout} className={style.logout}>Logout</button>
    </div>
  )
}
