export function TodoItem({id, title, completed, deleteTodo, toggleTodo}) {
    return (
        <li>
            <label>
            <input type="checkbox" checked={completed} onChange={(event) => toggleTodo(id, event.target.checked)} />
            {title}
            </label>
            <button className="btn btn-danger" onClick={() => {deleteTodo(id)}}>Delete</button>
        </li>
    )
}