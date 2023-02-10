'use client'

import { useState } from 'react'
import style from './style.module.scss'

export default function TaskForm () {
  const [task, setTask] = useState<string>('')

  const HandleSubmit = (e: any) => {
    e.preventDefault()
    console.log(task)
    setTask('')
  }

  return (
    <div className={style.container}>
      <form onSubmit={HandleSubmit} className={style.form}>
        <input type='tex' placeholder='New Task' value={task} onChange={({ target: { value } }) => setTask(value)} className={style.input} />
        <button className={style.button}>Add</button>
      </form>
    </div>
  )
}
