import React from 'react';

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
    return (
        <div>
            <h2>{todo.title}</h2>
            <p>{todo.content}</p>
            <button onClick={() => toggleTodo(todo.id)}>{todo.isDone ? '취소' : '완료'}</button>
            <button onClick={() => removeTodo(todo.id)}>삭제</button>
        </div>
    );
};

export default TodoItem;
