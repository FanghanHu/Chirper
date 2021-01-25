import React from "react";
import {useHistory} from 'react-router-dom'
import "./style.css";

function MainMenu() {
    const history = useHistory();

    return (
        <>
            <div className="container mainMenu">
                <div className="btn-group rounded" >
                    <button className="btn button" onClick={() => {history.push("/orderPage")}}><i className="fas fa-hamburger fa-10x"></i><h4>Express</h4></button>
                    <button className="btn button" onClick={() => {history.push("/table")}}><i className="fas fa-utensils fa-10x"></i><h4>Dine In</h4></button>
                    <button className="btn button" onClick={() => {history.push("/customerInfo")}}><i className="fas fa-phone-alt fa-10x"></i><h4>Phone Order</h4></button>
                    <button className="btn button" onClick={() => {history.push("/recall")}}><i className="fas fa-search fa-10x"></i><h4>Recall Order</h4></button>
                </div>
            </div>
            <div className="container logout">
                <button className="btn logoutBtn"><h4>Logout</h4></button>
            </div>
        </>
    );
};

export default MainMenu;