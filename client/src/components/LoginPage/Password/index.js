import React from "react";

function Password() {
    return(
        <>  
        <form className="password-form">
            <div className="form-group">
                <label htmlFor="password"><i className="fas fa-lock"></i>Password</label>
                <input type="password" className="form-control" id="password" placeholder="password"></input>
            </div>
                <button className="btn-lg btn-success btn-block" type="submit">Login</button>
        </form>
        </>
    )
}

export default Password;