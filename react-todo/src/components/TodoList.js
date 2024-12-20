import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState(['Learn React', 'Build a Todo List']);
  const [newTodo, setNewTodo] = useState('');

  // Function to add a new todo
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  // Function to toggle todo completion status
  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    // Add or remove 'completed' class based on current status
    updatedTodos[index] = updatedTodos[index].includes('completed')
      ? updatedTodos[index].replace('completed', '')
      : `${updatedTodos[index]} completed`;
    setTodos(updatedTodos);
  };

  // Function to delete a todo
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => toggleTodo(index)}
            style={{
              textDecoration: todo.includes('completed') ? 'line-through' : 'none',
            }}
          >
            {todo}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the toggleTodo
                deleteTodo(index);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Add a new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default TodoList;
