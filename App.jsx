import React, { useState } from 'react';
import './App.css';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [receivedTodo, setReceivedTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, { text: newTodo, completed: false, id: Date.now() }]);
            setNewTodo('');
        }
    };

    const handleToggleCompleted = (id) => {
        setTodos(todos.map((todo) => {
if (todo.id === id) {
  return { ...todo, completed: !todo.completed };
}
return todo;
}));
};

const handleDeleteTodo = (id) => {
setTodos(todos.filter((todo) => todo.id !== id));
};

const handleReceivedTodo = (text) => {
setReceivedTodo(text);
};

return (
<div className="todo-app">
<h1>Todo App</h1>
<input
  type="text"
  value={newTodo}
  onChange={(e) => setNewTodo(e.target.value)}
  placeholder="Enter todo"
  className="todo-input"
/>
<button onClick={handleAddTodo} className="add-todo-btn">Add Todo</button>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggleCompleted(todo.id)}
                        />
                        <span onClick={() => handleReceivedTodo(todo.text)}>{todo.text}</span>
                        <button onClick={() => handleDeleteTodo(todo.id)} className="delete-btn">Delete</button>
                    </li>
                ))}
            </ul>
            {receivedTodo && (
                <div className="received-todo">
                    <h2>Received Todo:</h2>
                    <p>{receivedTodo}</p>
                </div>
            )}
        </div>
    );
}

export default TodoApp;



