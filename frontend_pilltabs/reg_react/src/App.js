import React from "react";
import Navbar from "./NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> App.js</h1>
      <p>
        {" "}
        visit <a href="#anchor">here</a>{" "}
      </p>
      <Navbar />
    </div>
  );
}

export default App;
