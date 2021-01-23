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
            <div className="container">
                <div className="row">
                    <div className="col-3 bg-primary">
                        1
                    </div>
                    <div className="col-6 bg-warning">
                        2
                    </div>
                    <div className="col-3 bg-success">
                        3
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderPage;