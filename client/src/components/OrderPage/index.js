import React, { useEffect, useState } from "react";
import axios from "axios";
import {useOrder, useSetOrder} from '../../Contexts/order-context'
import { useSetTable, useTable } from "../../Contexts/table-context";
import { useUser } from "../../Contexts/user-context";
import { DEFAULT_CUSTOMER, useCustomer, useSetCustomer } from "../../Contexts/customer-context";
import { Redirect, useHistory } from "react-router-dom";
import ReceiptPreview from '../ReceiptPreview';


export default function(props) {
    const [menus, setMenus] = useState([{Items: []},{Items: []}]);
    const order = useOrder();
    const setOrder = useSetOrder();
    const table = useTable();
    const setTable = useSetTable();
    const customer = useCustomer();
    const setCustomer = useSetCustomer();

    //check if user is logged in
    const user = useUser();
    const history = useHistory();
    if(!user) {
        return <Redirect to="/"/>
    }

    //load the menus
    const loadMenus = function() {
        return axios.get("/api/menu/getAll/", {
            params: {
                eagarLoad: "true"
            }
        });
    }

    const saveOrder = async function() {
        if(order) {
            let orderId = order.id;

            //create a new order if the current order doesn't exist
            if(!orderId) {
                const createRes = await axios.post("/api/order/create/", {
                        //uses the current user as creator
                        creatorId: order.creatorId,
                        Tables:order.Tables,
                        Customers: order.Customers
                });
                orderId = createRes.data.id;
            }

            //find all items taht's newly ordered
            const newItems = order.OrderItems.filter(item => item.status === "NEW");

            //order new items through the API
            const orderRes = await axios.post("/api/order/orderItem/", {
                orderId,
                items: newItems,
                serverId: user.id
            });

            //TODO: allow modification of existing items

            //update current order with the order object returned by the server
            setOrder(orderRes.data);
        }
    }

    const orderItem = function(item) {
        //add a new OrderItem into the order with the status of "NEW"
        setOrder({
            ...order,
            OrderItems: [...order.OrderItems, {...item, status: "NEW"}]
        });
    }

    useEffect(() => {
        let mounted = true;
        loadMenus().then((result) => {
            if(mounted) {
                setMenus(result.data);
            }
        });

        //create default order object if none exist
        if(!order) {
            if(!user) {
                history.push('/');
            } else {
                if(mounted) {
                    
                setOrder({
                    creatorId: user.id,
                    Tables:table?[table]:[],
                    Customers:customer?[customer]:[],
                    OrderItems:[]
                });
                }
            }
        }

        return () => {
            mounted = false;
        }
    });

    return (
        <div className="container-fulid h-100 pt-5">
            <div></div>
            <div className="row w-75 h-75 mx-auto">
                <div className="col-3">
                    <div className="card h-100">
                        <div className="card-body bg-light">
                            {menus[1].Items.map(item => {
                                return (
                                    <button key={item.id} className="btn btn-primary m-1" onClick={() => { orderItem(item) }}>{item.itemName}</button>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card h-100">
                        <div className="card-body bg-light">
                            {menus[0].Items.map(item => {
                                return (
                                    <button key={item.id} className="btn btn-primary m-1" onClick={() => { orderItem(item) }}>{item.itemName}</button>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="col-3">
                        <ReceiptPreview order={order?order:{OrderItems:[]}} />
                        <div className="d-flex justify-content-around flex-wrap mt-5">
                            <button className="btn btn-success m-1" style={{width:"8em"}} onClick={saveOrder}>Place Order</button>
                            <button className="btn btn-primary m-1" style={{width:"8em"}} onClick={async () => {
                                await saveOrder();
                                history.push('/payment');
                            }}>Payment</button>
                            <button className="btn btn-danger m-1" style={{width:"8em"}} onClick={() => {
                                setCustomer({...DEFAULT_CUSTOMER});
                                setTable(null);
                                setOrder(null);
                                history.push('/mainmenu');
                            }}>Exit</button>
                        </div>
                </div>
            </div>
        </div>
    );
}