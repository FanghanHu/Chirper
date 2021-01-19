import React from "react";
import "../../assets/css/style.css";



function Password() {
    return(
        <>
    <div className="container">  
        <form id="Password">
            <div className="form-group">
                <label for="password"><i className="fas fa-lock"></i>Password</label>
                <input type="text" className="form-control" id="password" placeholder="password"></input>
            </div>
        </form>
    </div>
        </>
    )





}

export default Password;