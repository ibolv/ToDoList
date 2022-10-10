import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
 const [input, setInput] = useState(props.edit ? props.edit.value : '')


 const Change = e => {
    setInput(e.target.value);
 };

 const Submit = e => {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 1000),
        text: input,
        isComplete: false
    });

    setInput('')
 };

  return (
    <form className="todo-form" onSubmit={Submit}>
        {props.edit ? (
            <>
        <input 
            type="text" 
            placeholder='Обновить' 
            value={input} name="text" 
            className='todo-input'
            onChange={Change}/>
        <button className="todo-button">Обновить</button>
        </>) : (
            <>
            <input 
            type="text" 
            placeholder='Добавить заметку' 
            value={input} name="text" 
            className='todo-input'
            onChange={Change}/>
        <button className="todo-button">Добавить заметку</button>
        </>)
        }
        
    </form>
  );
}

export default TodoForm