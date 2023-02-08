import Link from 'next/link'
import { Routes, Route } from './Routes'
import style from './style.module.scss'

export default function NavBarr () {
  return (
    <div className={style.container}>
      {Routes.map((route: Route) => <Link key={route.path} href={route.path}>{route.name}</Link>)}
    </div>
  )
}
