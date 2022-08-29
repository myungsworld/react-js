import { useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDoList, setTodoList] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const lists = toDoList.map((value, index) => <li key={index}>{value}</li>);
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (toDo === "") {
            return;
          } else {
            setTodoList((currentArray) => [...currentArray, toDo]);
            setTodo("");
          }
        }}
      >
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write your to do"
        ></input>
        <button>할일</button>
      </form>
      <hr />
      <ul>{lists}</ul>
    </div>
  );
}

export default App;
