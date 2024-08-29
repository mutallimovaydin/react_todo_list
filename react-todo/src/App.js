import './App.css';
import './index.css'
import React, { useState } from 'react';
import AddToDoForm from './AddToForm';
import ToDoList from './ToDoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600 p-6">
      <h1 className="text-center text-white text-4xl mb-8">React To-Do List</h1>
      <AddToDoForm addTodo={addTodo} />
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;