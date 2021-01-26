import React from "react";
import { Redirect, useHistory } from 'react-router-dom'
import { useSetUser, useUser } from "../../Contexts/user-context";
import "./style.css";

function MainMenu() {
    //check if user is logged in
    const user = useUser();
    const setUser = useSetUser();
    const history = useHistory();
    if(!user) {
        return <Redirect to="/"/>
    }

    return (
        <>
            <div className="container h-100">
                <div className="d-flex justify-content-center flex-column h-100">
                    <div className="btn-group rounded mainButtonContainer" >
                        <button className="btn button" onClick={() => { history.push("/orderPage") }}><i className="fas fa-hamburger fa-10x"></i><h4>Express</h4></button>
                        <button className="btn button" onClick={() => { history.push("/table") }}><i className="fas fa-utensils fa-10x"></i><h4>Dine In</h4></button>
                        <button className="btn button" onClick={() => { history.push("/customerInfo") }}><i className="fas fa-phone-alt fa-10x"></i><h4>Phone Order</h4></button>
                        <button className="btn button" onClick={() => { history.push("/recall") }}><i className="fas fa-search fa-10x"></i><h4>Recall Order</h4></button>
                    </div>
                    <div className="w-100 mt-5 text-center">
                        <button className="btn logoutBtn" onClick={() => {
                            setUser(null);
                        }}><h4>Logout</h4></button>
                    </div>
                </div>
                
            </div>

        </>
    );
};

export default MainMenu;