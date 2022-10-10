import React from 'react'
import Header from './Header'
import Footer from './Footer'
import TodoList from './TodoList'

function MainTodo() {
  return (
    <>
        <Header/>
        <div className="todo-app">
        <TodoList/>
    </div>
    <Footer/>
    </>
  )
}

export default MainTodo