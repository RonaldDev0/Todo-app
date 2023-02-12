'use client'

import { supabase } from '@/utils'
import { useState } from 'react'
import style from './style.module.scss'

export default function TaskForm ({ setTodos, todos, userId }: any) {
  const [taskName, setTask] = useState<string>('')

  const HandleSubmit = async (e: any) => {
    e.preventDefault()
    setTodos([...todos, { task: taskName }])
    addTodo(taskName, userId)
    setTask('')
  }

  return (
    <div className={style.container}>
      <form onSubmit={HandleSubmit} className={style.form}>
        <input type='tex' placeholder='New Task' value={taskName} onChange={({ target: { value } }) => setTask(value)} className={style.input} autoFocus />
        <button className={style.button}>Add</button>
      </form>
    </div>
  )
}

const addTodo = async (taskName: string, id: any) => {
  const send = await supabase.from('todos').insert([{ user_id: id, task: taskName }])
  return send
}
