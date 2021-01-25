import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import LoginPage from "./components/LoginPage";
import CustomerInfoForm from "./components/CustomerInfoForm";
import MainMenu from "./components/MainMenu";
import OrderPage from "./components/OrderPage";
import RecallPage from "./components/RecallPage";
import TableSelection from "./components/TableSelection";
import PaymentPage from "./components/PaymentPage";


function App() {
  return (
    <>
      <Router>
        <Route path="/" exact>
            <LoginPage/>
        </Route>

        <Route path="/customerInfo" exact>
          <CustomerInfoForm/>
        </Route>

        <Route path="/recall" exact>
          <RecallPage/>
        </Route>  

        <Route path="/table" exact>
          <TableSelection/>
        </Route>
        
        <Route path="/mainMenu" exact>
          <MainMenu />
        </Route>

        <Route path="/orderpage" exact>
          <OrderPage />
        </Route>

        <Route path="/payment" exact>
          <PaymentPage/>
        </Route>  
      </Router>
    </>
  );
}


export default App;
