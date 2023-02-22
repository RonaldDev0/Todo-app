'use client'
import { supabase } from '@/utils'
import { useState, useEffect } from 'react'
import { TaskForm, TaskList } from '@/components'

export default function HomePage () {
  const [todos, setTodos] = useState<any>([])
  const [userId, setUserId] = useState('')

  useEffect(() => {
    const getData = async () => {
      // Read all todos
      const { data } = await supabase.from('todos').select('*')
      setTodos(data)

      const { data: { session: { user: { id } } } }: any = await supabase.auth.getSession()
      setUserId(id)
    }
    getData()
  }, [])

  return (
    <div>
      <TaskForm setTodos={setTodos} todos={todos} userId={userId} />
      <TaskList setTodos={setTodos} todos={todos} userId={userId} />
    </div>
  )
}
