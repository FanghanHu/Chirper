import React from "react";


function UserName() {
    return (
        <>       
        <form className="username-form">
            <div className="form-group">
                <label htmlFor="username"><i className="fas fa-user"></i>Username</label>
                <input type="text" className="form-control" id="username" placeholder="username"></input>
            </div>
        </form>
        </>
    )
}

export default UserName;