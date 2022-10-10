
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftBar from './components/LeftBar';
import React from "react";
import TodoList from './components/TodoList';
import SearchTodo from "./components/SearchTodo";
import MainTodo from './components/MainTodo';


class App extends React.Component{
  render(){ 
  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<MainTodo/>} />
      <Route exact path='/search' element={<SearchTodo/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
  }
}


export default App;
