import React, { useEffect, useState } from "react";
import axios from "axios";

import { Redirect, useHistory } from "react-router-dom";
import { useUser } from "../../Contexts/user-context";
import { useOrder, useSetOrder } from '../../Contexts/order-context'


function RecallPage() {
    const [orders, setOrders] = useState([]);
    const [orderNumber, setOrderNumber] = useState("");

    const order = useOrder();
    const setOrder = useSetOrder();

    //Load orders
    useEffect(() => {
        let mounted = true;

        axios.get('/api/order/getall', {
            params: {
                eagarLoad: true
            }
        }).then((res) => {
            if (mounted) {
                setOrders(res.data);
            }
        })

        return () => {
            mounted = false;
        }
    })

    //check if user is logged in
    //check if user is logged in
    const user = useUser();
    const history = useHistory();
    if (!user) {
        return <Redirect to="/" />
    }



    return (
        <div className="d-flex flex-column justify-content-center h-100">
            <div className="card mx-auto w-75 h-75">
                <div className="card-header">
                    Orders
                </div>
                <div className="card-body">
                    <div className="order-form" style={{ textAlign: "right" }}>
                        <label htmlFor="order" className="mr-2">Order Number: </label>
                        <input type="text" value={orderNumber} onChange={(e) => { setOrderNumber(e.target.value) }}></input>
                        <button className="btn btn-success m-1" onClick={() => {
                            axios.get('/api/order/getWithOrderNumber', {
                                params: {
                                    orderNumber,
                                    eagarLoad: true
                                }
                            }).then(res => {
                                setOrder(res.data);
                                history.push('/orderPage');
                            }).catch(e => {
                                setOrder(null);
                            })
                        }}>Go</button>
                    </div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Order Number</th>
                                <th scope="col">Table</th>
                                <th scope="col">Customer</th>
                                <th scope="col">Server</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(el => {
                                return (
                                    <tr key={el.id} className={order && (order.id === el.id) ? "bg-success" : ""} onClick={() => {
                                        setOrder(el);
                                    }}>
                                        <td>{el.orderNumber}</td>
                                        <td>{el.Tables[0] ? el.Tables[0].tableName : ""}</td>
                                        <td>{el.Customers[0] ? el.Customers[0].fullName : ""}</td>
                                        <td>{el.creator.fullName}</td>
                                        <td className={(el.status === "SETTLED"?"text-success":"text-warning")}>{el.status}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <div style={{ position: "absolute", bottom: "1em", right: "1em" }}>
                        <button type="button" className="btn btn-danger btn-lg float-right m-1" style={{ width: "8em" }} onClick={() => {
                            setOrder(null);
                            history.push('/mainMenu');
                        }}>Exit</button>
                        <button type="button" className="btn btn-success btn-lg float-right m-1" style={{ width: "8em" }} onClick={() => {
                            history.push('/orderPage');
                        }}>Open</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecallPage;