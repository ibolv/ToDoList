import logo from '../logo.png';
import React from "react"
import "./Header.css"
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
        <div className="logo">
          <a href="/">
            <img src={logo} alt = "logo" width="60" height="60px" />
          </a>
        </div>
        <div className="menu">
          <ul>
          <Link to='/'><li>ToDoList</li></Link>
            <Link to='/search'><li>Поиск</li></Link>
          </ul>
        </div>
      </header>
    )
}

export default Header