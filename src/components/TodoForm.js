import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handelChange = e =>{
        setInput(e.target.value)
    };

    const handelSubmit = e =>{
        e.preventDefault();
        
        props.onSubmit({
           id : Math.floor(Math.random() *1000),
           text: input
        })

        setInput('');
    };

    return ( 
        <form className = "form-group" onSubmit={handelSubmit} > 
            <input type = "text"
            placeholder = "add a new todo"
            value = { input }
            name = "text"
            className = "todo-input"
            onChange={handelChange}
            ref={inputRef}
            />
            <button className="todo-button">add todo</button>
       </form> 
    );
}

export default TodoForm;