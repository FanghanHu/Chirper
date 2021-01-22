// import React, { Component } from "react";
import React from "react";
// import "./App.css";
import Wrapper from "./components/Wrapper";
import {BrowserRouter as Router, Route} from "react-router-dom"
import CustomerInfoForm from "./components/CustomerInfoForm";

function App() {
  return (
    // <div className="App">
    //   <div className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h2>Welcome to React</h2>
    //   </div>
    //   <p className="App-intro">
    //     To get started, edit <code>src/App.js</code> and save to reload.
    //   </p>
    // </div>
    <>
      <Router>
        <Route path="/" exact>
          <div className="box1">
            <Wrapper/>
            </div>
        </Route>
        <Route path="/customerInfo" exact>
          <CustomerInfoForm/>
        </Route>
      </Router>
    </>
  );
}


export default App;
