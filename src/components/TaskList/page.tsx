import { CardTask } from '@/components'
import style from './style.module.scss'

export default function TaskList ({ todos, userId }: any) {
  const Mytodos = todos?.filter((todo: any) => todo.user_id === userId).sort((a: any, b: any) => a.id - b.id)
  const list = Mytodos?.map((todo: any, index: number) => <CardTask key={todo.id ? todo.id : index} todo={todo} />)

  return (
    <div className={style.container}>
      {list?.length === 0 ? <h3>You don't have to do</h3> : list}
    </div>
  )
}
