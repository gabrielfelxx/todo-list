import { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!title || !category) {
      alert("Preencha todos os campos!")
      return;}
    addTodo(title, category);
    setTitle("");
    setCategory("");
  };


  return (
    <div className="todo-form">
        <h1>Create Task</h1>
        <form onSubmit={handleSubmit}>
            <input value={title} type="text" placeholder="Type a Title" onChange={(event) => setTitle(event.target.value)} />
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
                <option value="">Select a Category</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Acadêmico">Acadêmico</option>
            </select>
            <button type="submit">Create Task</button>
        </form>
    </div>
  )
}

export default TodoForm