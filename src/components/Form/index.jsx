import { useState } from "react";
import "./index.css";

function Form({ addTodo }) {
  const [itemToDo, setItemToDo] = useState("");

  function prevent(event) {
    event.preventDefault();
  }

  return (
    <div className="div-form">
      <form onSubmit={prevent}>
        <input
          type="text"
          placeholder="Digite sua to-do"
          value={itemToDo}
          onChange={(event) => setItemToDo(event.target.value)}
        />
        <button onClick={() => addTodo(itemToDo)}>Adicionar</button>
      </form>
    </div>
  );
}

export default Form;
