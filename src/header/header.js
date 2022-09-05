import React from "react";
import "../header/header.css";

const Header = () => {
  return (
    <div>
      <div className="navbar">
        <a href="#home">Home</a>
        <div className="subnav">
          <button className="subnavbtn">About <i class="fa fa-caret-down"></i></button>
            <div className="subnav-content">
            </div>
        </div> 
      <div className="subnav">
        <button className="subnavbtn">Services <i class="fa fa-caret-down"></i></button>
          <div className="subnav-content">
          </div>
      </div> 
      <div className="subnav">
        <button className="subnavbtn">Partners <i class="fa fa-caret-down"></i></button>
          <div className="subnav-content">
          </div>
      </div>
        <a href="#contact">Contact</a>
        <div className="subnav">
        <button className="subnavbtn">Register <i class="fa fa-caret-down"></i></button>
          <div className="subnav-content">
          </div>
      </div>
      </div>   
    </div>
  )
}

export default Header;