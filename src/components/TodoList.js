import React, {useState} from 'react'
import Todo from './Todo';
import ToDoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if (!todo.text) {
            return;
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            
            
            return todo;
        });
        setTodos(updatedTodos)
        console.log(updatedTodos)
    };

  return (
    <div className='container'>
    <div className='todo'>
        <h1>Мои планы</h1>
        <ToDoForm onSubmit={addTodo}/>
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
    </div>
  )
}

export default TodoList