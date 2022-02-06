import "./index.css";

function TodoList({ handleTodo, toDo }) {
  return (
    <ul className="ul-todo">
      {toDo.map((current, index) => (
        <li key={index}>
          {current}
          <button onClick={() => handleTodo(current)}>Remover</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
