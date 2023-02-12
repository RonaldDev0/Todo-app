import { CardTask } from '@/components'
import style from './style.module.scss'

export default function TaskList ({ todos, setTodos }: any) {
  return (
    <div className={style.container}>
      {todos?.map((todo: any) => <CardTask key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />)}
    </div>
  )
}
