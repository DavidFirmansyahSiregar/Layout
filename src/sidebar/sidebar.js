import React from "react";
import "../sidebar/sidebar.css"

const Sidebar = () => {
  return (
    
    <div className="sidenav">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
        <button className="dropdown-btn">Dropdown
            <i class="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-container">
            <a href="#a">Link 1</a>
            <a href="#b">Link 2</a>
            <a href="#c">Link 3</a>
        </div>
        <a href="#contact">Search</a>
    </div>
    
  )
}

export default Sidebar;
