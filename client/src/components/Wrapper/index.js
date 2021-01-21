import React, {Component} from "react";
import Keypad from "../Keypad";
import UserName from "../UserName";
import Password from "../Password";


class Wrapper extends Component {

    state = {currentView: "Keypad"}


    render () { 
        return(
            <>     
            <div className="container-fluid">   
            <button style={{position: "relative", right: "25px"}} className="btn btn-primary" onClick={()=> this.setState({currentView: "Keypad"})}>Login</button>   
            <button style={{position: "relative", left: "25px"}} className="btn btn-primary" onClick={()=> this.setState({currentView: "Login"})}>Back Office</button>
                {this.state.currentView === "Keypad" ? <Keypad/> : <><UserName/> <Password/></>}   
            </div>
            </>
        )
    }




}

export default Wrapper;