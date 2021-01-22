import React from "react";
import "./style.css";

function MainMenu() {
    return (
        <>
            <div className="container mainMenu">
                <div className="btn-group rounded" >
                    <button className="btn"><i className="fas fa-hamburger fa-10x"></i><h4>Express</h4></button>
                    <button className="btn"><i className="fas fa-utensils fa-10x"></i><h4>Dine In</h4></button>
                    <button className="btn"><i className="fas fa-phone-alt fa-10x"></i><h4>Phone Order</h4></button>
                    <button className="btn"><i className="fas fa-search fa-10x"></i><h4>Recall Order</h4></button>
                </div>
            </div>
        </>
    );
};

export default MainMenu;