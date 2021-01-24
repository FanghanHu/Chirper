import React, { Component } from "react";

class ReceiptPreview extends Component {
    constructor() {
        super();
        this.state = {
            selectedItem: null
        }
    }

    getSubtotal = () => {
        let result = 0;

        for(const orderItem of this.props.order.OrderItems) {
            if(orderItem.status !== "VOIDED") {
                result += orderItem.price;
            }
        }

        return result.toFixed(2);
    }

    getTax = () => {
        let result = 0;

        for(const orderItem of this.props.order.OrderItems) {
            if(orderItem.status !== "VOIDED") {
                result += orderItem.price * orderItem.tax;
            }
        }

        return result.toFixed(2);
    }

    getTotal = () => {
        let result = 0;

        for(const orderItem of this.props.order.OrderItems) {
            if(orderItem.status !== "VOIDED") {
                result += orderItem.price * orderItem.tax + orderItem.price;
            }
        }

        return result.toFixed(2);
    }

    render() {
        const order = this.props.order;
        return (
            <div className="card rounded-0 overflow-auto" style={{fontFamily:"sanif", height:"70vh", maxHeight:"70vh"}}>
                <div className="card-body">
                    <h3 className="text-center">Restaurant Name</h3>
                    <div className="text-muted text-center">
                        12345 somestreet Dr #789 <br/>
                        Houston, Tx, 77036 <br/>
                        (832) 452-1669 <br/>
                    </div>
                    <h2 className="text-center my-3">{order.orderNumber?`Order: ` + order.orderNumber:`New Order`}</h2>

                    <span className="text-muted">{order.createdAt?order.createdAt:""}</span>
                    <span className="text-muted float-right">{order.creator?order.creator.fullName:""}</span>
                    <hr/>
                    <ul className="list-unstyled mx-1">
                        {order.OrderItems.map(orderItem => {
                            return (
                                <li className="h5">{orderItem.itemName}<span className="float-right">{orderItem.price}</span></li>
                            );
                        })}
                    </ul>

                    <div className="float-right">
                        <span className="text-muted float-right">Subtotal: {this.getSubtotal()}</span><br/>
                        <span className="text-muted float-right">Tax: {this.getTax()}</span><br/>
                        <hr className="m-0 p-0"/>
                        <span className="bold h5 float-right">Total: {this.getTotal()}</span><br/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReceiptPreview