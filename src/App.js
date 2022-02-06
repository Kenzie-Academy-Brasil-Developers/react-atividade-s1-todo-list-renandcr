import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [toDo, setToDo] = useState([]);

  const addTodo = (newTodo) => {
    setToDo([...toDo, newTodo]);
    console.log(toDo);
  };

  const handleTodo = (itemRemove) => {
    const itemsFilter = toDo.filter((current) => current !== itemRemove);
    setToDo(itemsFilter);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-div">
          <div>
            <Form addTodo={addTodo} />
          </div>
          <div>
            <TodoList toDo={toDo} handleTodo={handleTodo} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
