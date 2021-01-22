// import React, { Component } from "react";
import React from "react";
// import "./App.css";
import Wrapper from "./components/Wrapper";
import {BrowserRouter as Router, Route} from "react-router-dom"
import CustomerInfoForm from "./components/CustomerInfoForm";
import MainMenu from "./components/MainMenu";

function App() {
  return (
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
        
        <Route path="/mainMenu" exact>
          <MainMenu />
        </Route>
        
      </Router>
    </>
  );
}


export default App;
