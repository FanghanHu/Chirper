import React, { Component } from "react";

class OrderPage extends Component {
    constructor() {
        super();
        this.state = {
            order: null,
            server: null
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-2 bg-primary">
                    a asd asd 
                </div>
                <div className="col-7 bg-dark">
                    casd as dasd 
                </div>
                <div className="col-2 bg-success">
                    d asd as d
                </div>
            </div>
        );
    }
}

export default OrderPage;