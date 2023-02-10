import { supabase } from '@/utils'
import { CardTask } from '@/components'

export default async function TaskList () {
  // Read all todos
  const { data: todos } = await supabase.from('todos').select('*')

  return (
    <div>
      {todos?.map((todo) => <CardTask key={todo.id} todo={todo} />)}
    </div>
  )
}
