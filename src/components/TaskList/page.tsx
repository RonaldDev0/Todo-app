import { CardTask } from '@/components'
import style from './style.module.scss'

export default function TaskList ({ todos, setTodos, userId }: any) {
  const filter = todos?.filter((todo: any) => todo.user_id === userId)
  const list = filter?.map((todo: any, index: number) => <CardTask key={todo.id ? todo.id : index} todo={todo} todos={todos} setTodos={setTodos} />)
  console.log('list: ', list)
  return (
    <div className={style.container}>
      {list?.length === 0 ? <h3>You don't have to do</h3> : list}
    </div>
  )
}
