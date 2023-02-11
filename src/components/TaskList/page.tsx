import { supabase } from '@/utils'
import { CardTask } from '@/components'
import style from './style.module.scss'

export default async function TaskList () {
  // Read all todos
  const { data: todos } = await supabase.from('todos').select('*')

  return (
    <div className={style.container}>
      {todos?.map((todo) => <CardTask key={todo.id} todo={todo} />)}
    </div>
  )
}
