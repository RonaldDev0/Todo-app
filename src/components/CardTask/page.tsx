// interface Todo {
//   id: number,
//   user_id: string,
//   task: string,
//   is_complete: boolean,
//   inserted_at: string
// }

export default function CardTask ({ todo }: any) {
  return (
    <div>
      <p>{todo.task}</p>
      <input type='checkbox' checked={todo.is_complete} />
    </div>
  )
}
