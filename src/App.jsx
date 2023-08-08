import { useState } from 'react'

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';

import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Estudar ReactJS",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Realizar projetos",
      category: "Trabalho",
      isCompleted: false,
    }
  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {

    const newTodo = {
      id: Math.floor(Math.random()*10000),
      text,
      category,
      isCompleted: false,
    };

    const newTodos = [...todos];
    newTodos.push(newTodo)
    setTodos(newTodos)
  };

  const del = (id) => {
    const newTodos = [...todos];
    const updatedTodos = newTodos.filter(task => task.id != id ? task : null);
    setTodos(updatedTodos);
  };

  const complete = (id) => {
    const newTodos = [...todos];
    newTodos.map((task) => task.id === id ? task.isCompleted = !task.isCompleted : task);
    setTodos(newTodos)
  }
  

  return (
    <div className="app">
      <h1 className='main-title'>ToDo List</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {todos
        .filter((todo) => filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted)
        .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => sort == "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
        .map((task) => (
          
          <Todo key={task.id} 
          todo={task} 
          del={del} 
          complete={complete}/>
          
        ))} </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App
