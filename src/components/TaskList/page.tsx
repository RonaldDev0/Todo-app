import { CardTask } from '@/components'
import style from './style.module.scss'

export default function TaskList ({ todos, setTodos }: any) {
  const list = todos?.map((todo: any, index: number) => <CardTask key={todo.id ? todo.id : index} todo={todo} todos={todos} setTodos={setTodos} />)
  return (
    <div className={style.container}>
      {list ? <h3>You don't have to do</h3> : list}
    </div>
  )
}
