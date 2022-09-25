import logo from '../logo.png';
import React from "react"
import "./Header.css"

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
            <p>ToDoList</p>
          </ul>
        </div>
      </header>
    )
}

export default Header