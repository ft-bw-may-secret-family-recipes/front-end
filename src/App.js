import logo from './logo.svg';
import './App.css';

import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
// import DisplayPage from "./components/DisplayPage";
// import EditRecipe from "./components/EditRecipe";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
// import NavBar from "./components/NavBar";
// import Add from "./components/Add";
// import PrivateRoute from "./components/PrivateRoute";
import React from "react";
import { Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />

      {/* Must be logged in to access these pages */}
      {/* <Route exact path="/edit" component={EditRecipe} /> */}
      {/* <Route path="/add" component={Add} /> */}
      {/* <PrivateRoute path="/display" component={DisplayPage} /> */}
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
