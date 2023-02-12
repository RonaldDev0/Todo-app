'use client'
import { supabase } from '@/utils'
import { useState, useEffect } from 'react'

import { TaskForm, TaskList } from '@/components'

export default function HomePage () {
  const [todos, setTodos] = useState<any>([])

  useEffect(() => {
    const getData = async () => {
      // Read all todos
      const { data } = await supabase.from('todos').select('*')
      setTodos(data)
    }
    getData()
  }, [])

  return (
    <div>
      <TaskForm setTodos={setTodos} todos={todos} />
      <TaskList todos={todos} />
    </div>
  )
}
