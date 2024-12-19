import React from 'react';
import './App.css';
import TodoList from './TodoList'; // Import the TodoList component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List App</h1> {/* Add a heading */}
        <TodoList /> {/* Render the TodoList component */}
      </header>
    </div>
  );
}

export default App;

