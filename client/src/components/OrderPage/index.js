import React, { Component } from "react";
import axios from "axios";

class OrderPage extends Component {
    constructor() {
        super();
        this.state = {
            //TODO: pass in the order creator, and table information, and customer info
            order: {
                creatorId:1,
                Tables:[],
                Customers:[],
                OrderItems:[]
            },
            server: null,
            menus: [{Items: []},{Items: []}]
        }

        this.loadMenus();
    }

    /**
     * order an item, changes made with this method must be saved with "saveOrder()" before it will effect server side data.
     */
    orderItem = (item) => {
        //add the item to orderItem list
        this.setState({
            order: {
                ...this.state.order,
                OrderItems: [...this.state.order.OrderItems, {...item, status: "NEW"}]
            }
        })
    }

    /**
     * send the current order to the server.
     */
    saveOrder = async () => {
        const order = this.state.order;
        if(order) {
            let orderId = order.id;

            //create a new order if the current order doesn't exist
            if(!orderId) {
                //TODO: creatorId
                const result = await axios.post("/api/order/create/", {
                        creatorId: 1
                });
                orderId = result.data.id;
            }
            
            //find all items taht's newly ordered
            const newItems = order.OrderItems.filter(item => item.status === "NEW");

            //order new items through the API
            //TODO: serverId
            const result = await axios.post("/api/order/orderItem/", {
                    orderId,
                    items: newItems,
                    serverId: 1
            });

            //TODO: allow modification of existing items

            this.setState({order: result.data});
        }
    }
    
    loadMenus = async () => {
        let result = await axios.get("/api/menu/getAll/", {
            params: {
                eagarLoad: "true"
            }
        });
        this.setState({menus: result.data});
    }

    placeOrderAndExit = async () => {
        await this.saveOrder();

        //TODO: exit the page
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
                            <div className="d-flex justify-content-around flex-wrap">
                                <button className="btn btn-success m-1" style={{width:"8em"}} onClick={this.saveOrder}>Place Order</button>
                                <button className="btn btn-primary m-1" style={{width:"8em"}}>Payment</button>
                                <button className="btn btn-danger m-1" style={{width:"8em"}}>Exit</button>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderPage;