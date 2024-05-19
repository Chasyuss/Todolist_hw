import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const InitialState = [
    {
      id: 1,
      title: '예시1',
      content: '내용1',
      isDone: false,
    },
    {
      id: 2,
      title: '예시2',
      content: '내용2',
      isDone: true,
    },
  ];

  const [todos, setTodos] = useState(InitialState);

  const addTodo = (title, content) => {
    const newTodo = {
      id: uuidv4(),
      title,
      content,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className='container'>
      <h2>Todolist</h2>
      <p>----------------------------------</p>
      <TodoForm addTodo={addTodo} />
      <p>----------------------------------</p>
      <h1>Working</h1>
      <TodoList todos={todos.filter(todo => !todo.isDone)} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      <p>----------------------------------</p>
      <h1>Done</h1>
      <TodoList todos={todos.filter(todo => todo.isDone)} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
};

export default App;
