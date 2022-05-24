import logo from './logo.svg';
import React from "react"
import './App.css';

function App() {
  const [todos, setTodos] = React.useState(["item1", "item2", "item3"])
  return (
    <div className="main">
      <TodoCount todos={todos}/>
      <TodoList setTodos={setTodos} todos={todos}/>
      <AddTodo setTodos={setTodos}/>
    </div>
  );
}

function TodoCount({ todos }) {
  return <div className='todo-total'>Total Todos: {todos.length}</div>
}

function TodoList( { todos, setTodos } ) {
  return(
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li className='todo-item' key={todo}>{todo}
        <button key={todo} className='todo-delete' type='submit' onClick={() => handleDelete(todo)}>X</button>
        </li>
      ))}
    </ul>
  );

  function handleDelete(item) {
    // copy of Todos
    const list = [...todos]

    //updatedList
    const updatedList = list.filter(one => one != item)

    setTodos(updatedList)
    console.log(updatedList)
  }

}

function AddTodo({ setTodos }) {
  function handleSubmit(event) {
    event.preventDefault();
    const todo = event.target.elements.todo.value
    setTodos(prevTodos => [...prevTodos, todo])
    event.target.reset();
  }
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input className='todo-input' type="text" id="todo"></input>
      <button className='todo-submit' type="submit">Add Todo</button>
    </form>
  )
}




export default App;
