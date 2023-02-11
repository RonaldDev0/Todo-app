import Image from 'next/image'
import style from './style.module.scss'

export default function NavBarr () {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <h1>Todo App</h1>
        <Image src='/checklist.png' width='25' height='25' alt='logo' />
      </div>
    </div>
  )
}
