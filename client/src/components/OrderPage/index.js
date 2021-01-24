import React, { Component } from "react";

class OrderPage extends Component {
    constructor() {
        super();
        this.state = {
            order: null,
            server: null,
            sideBar: [],
            mainMenu: []
        }
    }

    orderItem = async (item) => {
        //TODO:
    }

    loadMenu = async (menuName) => {
        //TODO:
    }

    render() {
        return (
            <div className="container-fulid h-100">
                <div className="row w-75 h-75 mx-auto my-5">
                    <div className="col-3">
                        <div className="card h-100">
                            <div className="card-body bg-light">
                                {this.state.sideBar.map(button => {
                                    return (
                                        <button className="btn btn-primary" onClick={() => { this.orderItem(button.item) }}>{button.item.ItemName}</button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card h-100">
                            <div className="card-body  bg-light">
                                {this.state.mainMenu.map(button => {
                                    return (
                                        <button className="btn btn-primary" onClick={() => { this.orderItem(button.item) }}>{button.item.ItemName}</button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        3
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderPage;