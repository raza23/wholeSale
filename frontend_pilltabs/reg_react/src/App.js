import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Navbar from "./NavBar";
import Login from "./login";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <h1> App.js</h1> */}
        <Navbar />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
