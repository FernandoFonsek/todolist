import React from "react";

import '../styles/todo.css';
const Todo = ({title, status, handleCompleteTodo, id }) => {


return(
<div className="container-todolist">
    <div>
        <h3>{title}</h3>
    </div>
    
    <div className="todo-actions">
    <button
    className={status ? "completed":"reset"}
    onClick={() => handleCompleteTodo(id)}>
        {status ? "reset":"Complete"}
    </button>
    </div>
</div>
);

};

export default Todo;