import { CardTask } from '@/components'
import style from './style.module.scss'

export default function TaskList ({ todos, setTodos, userId }: any) {
  const filter = todos?.filter((todo :any) => todo.user_id === userId).sort((a:any, b:any) => a.id - b.id)
  return (
    <div className={style.container}>
      {filter?.map((todo: any) => <CardTask key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />)}
    </div>
  )
}
