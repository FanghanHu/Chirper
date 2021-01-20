import React, {Component} from "react";
import Button from "../Button";
import Keypad from "../Keypad";
import UserName from "../UserName";
import Password from "../Password";


class Wrapper extends Component {

    state = {currentView: "Keypad"}


    render () { 
        return(
            <>
        <div className="container-fluid">     
            <button onClick={()=> this.setState({currentView: "Keypad"})}>Login</button>   
            <button onClick={()=> this.setState({currentView: "Login"})}>Back Office</button>
                {this.state.currentView === "Keypad" ? <Keypad/> : <><Button/> <UserName/> <Password/></>}
        </div>    
            </>
        )
    }




}

export default Wrapper;