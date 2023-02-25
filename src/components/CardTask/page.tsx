'use client'

import { supabase } from '@/utils'
import Image from 'next/image'
import style from './style.module.scss'

export default function CardTask ({ todo }: any) {
  return (
    <div className={style.container}>
      <input type='checkbox' defaultChecked={todo.is_complete} onChange={() => updateTodo(todo)} className={style.checkbox} />
      <label className={style.text}>{todo.task}</label>
      <button className={style.trash} onClick={() => deleteTodo(todo)}>
        <Image src='https://i.imgur.com/mYTRfLY.png' width='25' height='25' alt='Delete Icon' />
      </button>
    </div>
  )
}

const updateTodo = async (todo: any) => {
  const send = await supabase.from('todos').update({ is_complete: !todo.is_complete, inserted_at: todo.inserd_at }).eq('id', todo.id)
  return send
}

const deleteTodo = async (todo:any) => {
  const data = await supabase.from('todos').delete().eq('id', todo.id)
  return data
}
