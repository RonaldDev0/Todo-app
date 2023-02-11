'use client'

import { supabase } from '@/utils'
import Image from 'next/image'
import style from './style.module.scss'

// interface Todo {
//   id: number,
//   user_id: string,
//   task: string,
//   is_complete: boolean,
//   inserted_at: string
// }

export default function CardTask ({ todo }: any) {
  return (
    <div className={style.container}>
      <input type='checkbox' defaultChecked={todo.is_complete} onChange={() => updateTodo(todo)} className={style.checkbox} />
      <div className={style.text}>{todo.task}</div>
      <button className={style.trash} onClick={() => deleteTodo(todo)}>
        <Image src='/trash.png ' width='25' height='25' alt='Delete Icon' />
      </button>
    </div>
  )
}

const updateTodo = async (todo: any) => {
  const send = await supabase.from('todos').update({ is_complete: !todo.is_complete, inserted_at: todo.inserd_at }).eq('id', todo.id)
  console.log('send: ', send)
  return send
}

const deleteTodo = async (todo: any) => {
  const data = await supabase.from('todos').delete().eq('id', todo.id)
  return data
}
