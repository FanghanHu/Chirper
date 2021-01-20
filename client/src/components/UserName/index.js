import React from "react";
import "../../assets/css/style.css";


function UserName() {
    return (
        <>
    <div className="container-fluid">     
        <form id="UserName">
            <div className="form-group">
                <label for="username"><i className="fas fa-user"></i>Username</label>
                <input type="text" className="form-control" id="username" placeholder="username"></input>
            </div>
        </form>
    </div>
        </>
    )








}

export default UserName;