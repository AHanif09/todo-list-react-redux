import React from 'react';
import TodoList from './components/TodoList';
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Todo List</h1>
      </header>
      <main>
        <TodoList />
      </main>
    </div>
  );
}

export default App;
