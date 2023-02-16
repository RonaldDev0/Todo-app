'use client'
import { supabase } from '@/utils'
import { useState, useEffect } from 'react'
import { TaskForm, TaskList } from '@/components'

export default function HomePage () {
  const [todos, setTodos] = useState<any>([])
  const [userId, setUserId] = useState('')

  useEffect(() => {
    const getData = async () => {
      // Filter & Read all todos
      const { data } = await supabase.from('todos').select('*')
      setTodos(data?.filter((todo :any) => todo.user_id === userId).sort((a:any, b:any) => a.id - b.id))

      const { data: { session: { user: { id } } } }: any = await supabase.auth.getSession()
      setUserId(id)
    }
    getData()
  }, [userId])

  return (
    <div>
      <TaskForm setTodos={setTodos} todos={todos} userId={userId} />
      <TaskList setTodos={setTodos} todos={todos} />
    </div>
  )
}
