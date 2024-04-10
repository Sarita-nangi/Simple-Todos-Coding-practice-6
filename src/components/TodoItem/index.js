import './index.css'

const TodoItem = props => {
  const {todos, deleteTodo} = props
  const {title, id} = todos
  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-element">
      <p>{title}</p>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
