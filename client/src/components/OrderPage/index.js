import React, { Component } from "react";
import axios from "axios";

class OrderPage extends Component {
    constructor() {
        super();
        this.state = {
            order: null,
            server: null,
            menus: [{Items: []},{Items: []}]
        }

        this.loadMenus();
    }

    orderItem = async (item) => {
        //TODO:
    }
    
    loadMenus = async () => {
        let result = await axios.get("/api/menu/getAll/", {
            params: {
                eagarLoad: "true"
            }
        });
        this.setState({menus: result.data});
    }

    render() {
        return (
            <div className="container-fulid h-100">
                <div className="row w-75 h-75 mx-auto my-5">
                    <div className="col-3">
                        <div className="card h-100">
                            <div className="card-body bg-light">
                                {this.state.menus[1].Items.map(item => {
                                    return (
                                        <button key={item.id} className="btn btn-primary m-1" onClick={() => { this.orderItem(item) }}>{item.itemName}</button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card h-100">
                            <div className="card-body bg-light">
                                {this.state.menus[0].Items.map(item => {
                                    return (
                                        <button key={item.id} className="btn btn-primary m-1" onClick={() => { this.orderItem(item) }}>{item.itemName}</button>
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