import Link from 'next/link'
import style from './style.module.scss'

export default function NavBarr () {
  return (
    <div className={style.container}>
      <h1>Todo App</h1>
      <Link href='/login' className={style.link}>Login</Link>
    </div>
  )
}
