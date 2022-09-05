import React from "react";
import "./App.css"
import Header from "./header/header"
import Login from "./Form/login";
import Sidebar from "./sidebar/sidebar";

function App() {
  return (
    
    <div>
      <Header />
      <Sidebar />
      <Login />
    </div>
  )
}

export default App;