import React from "react";
import { Redirect } from "react-router-dom";
import { useOrder, useSetOrder } from "../../Contexts/order-context";
import { useUser } from "../../Contexts/user-context";
import ReceiptPreview from "../ReceiptPreview";
import InputWithIcon from "../InputWithIcon";

function PaymentPage() {
    const order = useOrder();
    const setOrder = useSetOrder();

    //check if user is logged in
    const user = useUser();
    if(!user) {
        return <Redirect to="/"/>
    }

    return(
    <>    
    <div className="card m-5" style={{width: "23rem"}}>
        <ReceiptPreview order={order}/>
    </div>

    <div className="card m-5" style={{width: "30rem"}}>
            <div className="card-header" style={{fontSize: "20px"}}>
            Cash Payment:
            </div>
        <div className="card-body">
            <div className="row mx-5" style={{margin: "20px"}}>
                <div className="col-4 p-1">
                <button className="btn btn-success">$10.00</button>
                </div>
                <div className="col-4 p-1">
                <button className="btn btn-success">$10.00</button>
                </div>
                <div className="col-4 p-1">
                <button className="btn btn-success">$10.00</button>
                </div>
                <div className="col-4 p-1">
                <button className="btn btn-success">$10.00</button>
                </div>
                <div className="col-4 p-1">
                <button className="btn btn-success">$10.00</button>
                </div>
                <div className="col-4 p-1">
                <button className="btn btn-success">$10.00</button>
                </div>
            </div>
            <div className="w-50 mx-auto">
            <InputWithIcon label={"$"}/>
            </div>

            <div className="row mx-5">
                <div className="col-4 p-1">
                    <button className="btn btn-light w-100 h-100">1</button>
                </div>
                <div className="col-4 p-1">
                    <button className="btn btn-light w-100 h-100">2</button>
                </div>
                <div className="col-4 p-1">
                    <button className="btn btn-light w-100 h-100">3</button>
                </div>
                <div className="col-4 p-1">
                    <button className="btn btn-light w-100 h-100">4</button>
                </div>
                <div className="col-4 p-1">
                    <button className="btn btn-light w-100 h-100">5</button>
                </div>
                <div className="col-4 p-1">
                    <button className="btn btn-light w-100 h-100">6</button>
                </div>
                <div className="col-4 p-1">
                    <button className="btn btn-light w-100 h-100">7</button>
                </div>
                <div className="col-4 p-1">
                    <button className="btn btn-light w-100 h-100">8</button>
                </div>
                <div className="col-4 p-1">
                    <button className="btn btn-light w-100 h-100">9</button>
                </div>
                <div className="col-4 p-1">
                    <button className="btn btn-light w-100 h-100">Delete</button>
                </div>
                <div className="col-4 p-1">
                    <button className="btn btn-light w-100 h-100">0</button>
                </div>
                <div className="col-4 p-1">
                    <button className="btn btn-light w-100 h-100">.</button>
                </div>
            </div>
                <div className="row mx-5" style={{margin: "20px"}}>
                    <button className="btn btn-primary">Pay Card</button>
                    <button className="btn btn-success">Pay Cash</button>
                </div>

        </div>
    </div>
    </>
    )
}

export default PaymentPage;