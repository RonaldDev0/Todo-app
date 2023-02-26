'use client'
import { supabase } from '@/utils'
import { useState, useEffect } from 'react'
import { TaskForm, TaskList } from '@/components'

export default function HomePage () {
  const [todos, setTodos] = useState<any>([])
  const [userId, setUserId] = useState('')

  useEffect(() => {
    const getData = async () => {
      setTodos(await getTodos())
      setUserId(await getId())
    }
    getData()
  }, [])

  supabase.channel('todos')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'todos' },
      (payload: any) => {
        const NewList = todos?.filter((item: any) => item !== payload.new)
        setTodos([...NewList, payload.new])
      }
    )
    .subscribe()

  return (
    <div>
      <TaskForm userId={userId} />
      <TaskList todos={todos} userId={userId} />
    </div>
  )
}

const getTodos = async () => {
  const { data } = await supabase.from('todos').select('*')
  return data
}

const getId = async () => {
  const { data: { session: { user: { id } } } }: any = await supabase.auth.getSession()
  return id
}
