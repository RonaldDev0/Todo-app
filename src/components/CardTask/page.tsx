'use client'

import { supabase } from '@/utils'

// interface Todo {
//   id: number,
//   user_id: string,
//   task: string,
//   is_complete: boolean,
//   inserted_at: string
// }

export default function CardTask ({ todo }: any) {
  return (
    <div>
      <p>{todo.task}</p>
      <input type='checkbox' defaultChecked={todo.is_complete} onChange={() => updateTodo(todo)} />
    </div>
  )
}

const updateTodo = async (todo: any) => {
  const send = await supabase.from('todos').update({ is_complete: !todo.is_complete, inserted_at: todo.inserd_at }).eq('id', todo.id)
  console.log('send: ', send)
  return send
}
