import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !content) {
            alert("제목과 내용을 입력해주세요");
            return;
        }
        addTodo(title, content);
        setTitle("");
        setContent("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='item'>
                <label>제목</label>
                <input type='text' placeholder='제목' value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>내용</label>
                <input type='text' placeholder='내용' value={content} onChange={(e) => setContent(e.target.value)} />
                <button type='submit'>추가하기</button>
            </div>
        </form>
    );
};

export default TodoForm;
