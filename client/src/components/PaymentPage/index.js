import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useOrder, useSetOrder } from "../../Contexts/order-context";
import { useUser } from "../../Contexts/user-context";
import ReceiptPreview from "../ReceiptPreview";
import InputWithIcon from "../InputWithIcon";
import axios from "axios";

function PaymentPage() {
    const order = useOrder();
    const setOrder = useSetOrder();
    const history = useHistory();

    const [amount, setAmount] = useState("");

    //check if user is logged in
    const user = useUser();
    if (!user) {
        return <Redirect to="/" />
    }

    /**
     * response contains the whole order
     */
    const addPayment = function(paymentAmount, paymentType) {
        axios.post('/api/order/addPayment', {
            orderId: order.id,
            serverId: user.id,
            amount: parseFloat(paymentAmount),
            type: paymentType
        }).then(res => {
            setOrder(res.data);
        });
    }

    
    let billTotal = 0;
    let paidAmount = 0;

    if(order.OrderItems && order.Payments) {
        order.OrderItems.forEach(orderItem => {
            if (orderItem.status === "OPEN") {
                billTotal += orderItem.price * (1 + orderItem.tax);
            }
        });
        order.Payments.forEach(payment => {
            if (payment.status === "OPEN") {
                paidAmount += payment.amount;
            }
        });
    }

    return (
        <>
            <div className="d-flex flex-wrap justify-content-center">
                <div className="card m-5" style={{ width: "23rem" }}>
                    <ReceiptPreview order={order} />
                </div>
                <div className="d-flex flex-column justify-content-center text-center" style={{ width: "23em" }}>
                    <div className="h5">Amount Due: {billTotal.toFixed(2)}</div>
                    <div className="h5">Paid Amount: {paidAmount.toFixed(2)}</div>
                    <div className="h4 text-success">Amount Due: {Math.max((billTotal - paidAmount).toFixed(2), 0)}</div>
                    <div className={"h3 " + (order.status==="PAID"?"text-success":"text-danger") }>Bill Status: {order.status}</div>
                </div>

                <div className="card m-5" style={{ width: "40rem" }}>
                    <div className="card-header" style={{ fontSize: "20px" }}>
                        Add a payment:
                    </div>
                    <div className="card-body">
                        <div className="row mx-5 text-center" style={{ margin: "20px" }}>
                            <div className="col-4 p-1">
                                <button className="btn btn-success" style={{width: "6em", height: "4em"}} onClick={()=>{
                                    addPayment(100,"CASH");
                                }}>$100.00</button>
                            </div>
                            <div className="col-4 p-1">
                                <button className="btn btn-success" style={{width: "6em", height: "4em"}} onClick={()=>{
                                    addPayment(50,"CASH");
                                }}>$50.00</button>
                            </div>
                            <div className="col-4 p-1">
                                <button className="btn btn-success" style={{width: "6em", height: "4em"}} onClick={()=>{
                                    addPayment(20,"CASH");
                                }}>$20.00</button>
                            </div>
                            <div className="col-4 p-1">
                                <button className="btn btn-success" style={{width: "6em", height: "4em"}} onClick={()=>{
                                    addPayment(10,"CASH");
                                }}>$10.00</button>
                            </div>
                            <div className="col-4 p-1">
                                <button className="btn btn-success" style={{width: "6em", height: "4em"}} onClick={()=>{
                                    addPayment(5,"CASH");
                                }}>$5.00</button>
                            </div>
                            <div className="col-4 p-1">
                                <button className="btn btn-success" style={{width: "6em", height: "4em"}} onClick={()=>{
                                    addPayment(1,"CASH");
                                }}>$1.00</button>
                            </div>
                        </div>
                        <div className="w-50 mx-auto">
                            <InputWithIcon label={"$"} inputProps={{
                                value: amount,
                                onChange: (e) => {setAmount(e.target.value)}
                            }}/>
                        </div>

                        <div className="row mx-5">
                            <div className="col-4 p-1">
                                <button className="btn btn-light w-100" style={{height: "4em"}} onClick={() => {
                                    setAmount(amount + "1");
                                }}>1</button>
                            </div>
                            <div className="col-4 p-1">
                                <button className="btn btn-light w-100" style={{height: "4em"}} onClick={() => {
                                    setAmount(amount + "2");
                                }}>2</button>
                            </div>
                            <div className="col-4 p-1">
                                <button className="btn btn-light w-100" style={{height: "4em"}} onClick={() => {
                                    setAmount(amount + "31");
                                }}>3</button>
                            </div>
                            <div className="col-4 p-1">
                                <button className="btn btn-light w-100" style={{height: "4em"}} onClick={() => {
                                    setAmount(amount + "4");
                                }}>4</button>
                            </div>
                            <div className="col-4 p-1">
                                <button className="btn btn-light w-100" style={{height: "4em"}} onClick={() => {
                                    setAmount(amount + "5");
                                }}>5</button>
                            </div>
                            <div className="col-4 p-1">
                                <button className="btn btn-light w-100" style={{height: "4em"}} onClick={() => {
                                    setAmount(amount + "6");
                                }}>6</button>
                            </div>
                            <div className="col-4 p-1">
                                <button className="btn btn-light w-100" style={{height: "4em"}} onClick={() => {
                                    setAmount(amount + "7");
                                }}>7</button>
                            </div>
                            <div className="col-4 p-1">
                                <button className="btn btn-light w-100" style={{height: "4em"}} onClick={() => {
                                    setAmount(amount + "8");
                                }}>8</button>
                            </div>
                            <div className="col-4 p-1">
                                <button className="btn btn-light w-100" style={{height: "4em"}} onClick={() => {
                                    setAmount(amount + "9");
                                }}>9</button>
                            </div>
                            <div className="col-4 p-1">
                                <button className="btn btn-light w-100" style={{height: "4em"}} onClick={() => {
                                    setAmount("");
                                }}>Delete</button>
                            </div>
                            <div className="col-4 p-1">
                                <button className="btn btn-light w-100" style={{height: "4em"}} onClick={() => {
                                    setAmount(amount + "0");
                                }}>0</button>
                            </div>
                            <div className="col-4 p-1">
                                <button className="btn btn-light w-100" style={{height: "4em"}} onClick={() => {
                                    setAmount(amount + ".");
                                }}>.</button>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center" style={{ margin: "20px" }}>
                            <button className="btn btn-lg btn-primary m-1" onClick={()=>{
                                    if(parseFloat(amount) > 0) {
                                        addPayment(amount,"CARD");
                                        setAmount(0);
                                    }
                                }}>Pay Card</button>
                            <button className="btn btn-lg btn-success m-1" onClick={()=>{
                                    if(parseFloat(amount) > 0) {
                                        addPayment(amount,"CASH");
                                        setAmount(0);
                                    }
                                }}>Pay Cash</button>
                            <button className="btn btn-lg btn-danger m-1" onClick={() => {
                                setOrder(null);
                                history.push('/mainMenu');
                            }}>Exit</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage;