
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftBar from './components/LeftBar';
import React from "react";
import TodoList from './components/TodoList';


function App() {
  return (
    <>
    <Header/>
    <div className="todo-app">
      <LeftBar/>
      <TodoList/>
    </div>
    <Footer/>
    </>
 //<LeftBar/>
   // <div className="App">
   //   <header className="App-header">
   //     <img src={logo} className="App-logo" alt="logo" />
   //     <p>
   //       Edit <code>src/App.js</code> and save to reload.
   //     </p>
   //     <a
   //       className="App-link"
   //       href="https://reactjs.org"
   //       target="_blank"
   //       rel="noopener noreferrer"
   //     >
   //       Learn React
   //     </a>
   //   </header>
   // </div>
  );
}

export default App;
