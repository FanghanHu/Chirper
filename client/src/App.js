import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom"
import LoginPage from "./components/LoginPage";
import CustomerInfoForm from "./components/CustomerInfoForm";
import MainMenu from "./components/MainMenu";
import OrderPage from "./components/OrderPage";
import RecallPage from "./components/RecallPage";
import TableSelection from "./components/TableSelection";
import { UserProvider } from "./Contexts/user-context";


function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Route path="/" exact>
            <LoginPage/>
          </Route>

          <Route path="/customerInfo" exact>
            <CustomerInfoForm />
          </Route>

          <Route path="/recall" exact>
            <RecallPage />
          </Route>

          <Route path="/table" exact>
            <TableSelection />
          </Route>

          <Route path="/mainMenu" exact>
            <MainMenu />
          </Route>

          <Route path="/orderpage" exact>
            <OrderPage />
          </Route>
        </Router>
      </UserProvider>
    </>
  );
}


export default App;
