import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

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
    }
  ];

  const [todos, setTodos] = useState(InitialState);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const AddTodos = (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("제목과 내용을 입력해주세요");
      return;
    }

    const newTodos =
    {
      id: uuidv4(),
      title: title,
      content: content,
      isDone: false
    };

    setTodos([...todos, newTodos]);
    setTitle("");
    setContent("");
  };

  const toggletodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };


  return (
    <form onSubmit={AddTodos}>
      <div className='container'>
        <h2> Todolist </h2>
        <p> ----------------------------------</p>
        <div className='item'>
          <label> 제목 </label>
          <input type='text' placeholder='제목' value={title} onChange={(e) => setTitle(e.target.value)} />

          <label> 내용 </label>
          <input type='content' placeholder='내용' value={content} onChange={(e) => setContent(e.target.value)} />

          <button type='submit'> 추가하기 </button>
        </div>

        <p> ----------------------------------</p>
        <h1> Working </h1>

        <div className='Working'>
          {/* 랜더링 */}
          {todos.filter(todo => !todo.isDone).map(todo => (
            <div key={todo.id}>
              {/* 내용 화면 출력 */}
              <h2>{todo.title} </h2>
              <p> {todo.content}</p>
              {/* 상태가 바뀔때마다 취소 완료버튼 바뀜 */}
              <button onClick={() => toggletodo(todo.id)}>완료</button>

              {/* 삭제버튼은 공통 */}
              <button onClick={() => removeTodo(todo.id)}> 삭제 </button>
            </div>
          ))}
        </div>

        <p> ----------------------------------</p>
        <h1> Done </h1>

        <div className='Done'>
          {/* 랜더링 */}
          {todos.filter(todo => todo.isDone).map(todo => (
            <div key={todo.id}>
              <h2> {todo.title} </h2>
              <p> {todo.content} </p>
              <button onClick={() => toggletodo(todo.id)}> 취소 </button>
              <button onClick={() => removeTodo(todo.id)}> 삭제 </button>
            </div>
          ))}

        </div>

      </div>
    </form>
  )
}

export default App