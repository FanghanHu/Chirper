import React from "react";
import { Redirect } from "react-router-dom";
import { useUser } from "../../Contexts/user-context";
import ReceiptPreview from "../ReceiptPreview";
import InputWithIcon from "../InputWithIcon";

function PaymentPage() {
    //check if user is logged in
    const user = useUser();
    if(!user) {
        return <Redirect to="/"/>
    }

    return(
    <>   
<div className="container"> 
    <div className="row">
        <div className="card m-5" style={{width: "23rem"}}>
        <ReceiptPreview order={{
            "id": 1,
            "orderNumber": "#1",
            "status": "OPEN",
            "createdAt": "2021-01-24T02:55:22.000Z",
            "updatedAt": "2021-01-24T02:55:22.000Z",
            "creatorId": 1,
            "creator": {
                "id": 1,
                "fullName": "John Doe",
                "username": "username",
                "password": "password",
                "accessCode": "0",
                "isManager": true,
                "createdAt": "2021-01-24T02:55:22.000Z",
                "updatedAt": "2021-01-24T02:55:22.000Z"
            },
            "Payments": [
                {
                    "id": 1,
                    "amount": 5,
                    "type": "CASH",
                    "status": "OPEN",
                    "createdAt": "2021-01-24T02:55:23.000Z",
                    "updatedAt": "2021-01-24T02:55:23.000Z",
                    "OrderId": 1,
                    "cashierId": 1,
                    "cashier": {
                        "id": 1,
                        "fullName": "John Doe",
                        "username": "username",
                        "password": "password",
                        "accessCode": "0",
                        "isManager": true,
                        "createdAt": "2021-01-24T02:55:22.000Z",
                        "updatedAt": "2021-01-24T02:55:22.000Z"
                    },
                    "Logs": []
                }
            ],
            "OrderItems": [
                {
                    "id": 1,
                    "itemName": "cheese burger",
                    "price": 5.25,
                    "tax": 0.0825,
                    "status": "OPEN",
                    "createdAt": "2021-01-24T02:55:23.000Z",
                    "updatedAt": "2021-01-24T02:55:23.000Z",
                    "OrderId": 1,
                    "ItemId": null,
                    "serverId": 1,
                    "Item": null,
                    "server": {
                        "id": 1,
                        "fullName": "John Doe",
                        "username": "username",
                        "password": "password",
                        "accessCode": "0",
                        "isManager": true,
                        "createdAt": "2021-01-24T02:55:22.000Z",
                        "updatedAt": "2021-01-24T02:55:22.000Z"
                    },
                    "Logs": []
                },
                {
                    "id": 2,
                    "itemName": "Ramen",
                    "price": 9.25,
                    "tax": 0.0825,
                    "status": "OPEN",
                    "createdAt": "2021-01-24T20:32:54.000Z",
                    "updatedAt": "2021-01-24T20:32:54.000Z",
                    "OrderId": 1,
                    "ItemId": 1,
                    "serverId": 1,
                    "Item": {
                        "id": 1,
                        "itemName": "Cheeseburger",
                        "price": 3.25,
                        "tax": 0.0825,
                        "createdAt": "2021-01-24T02:55:22.000Z",
                        "updatedAt": "2021-01-24T02:55:22.000Z",
                        "Menus": [
                            {
                                "id": 1,
                                "menuName": "Main Menu",
                                "createdAt": "2021-01-24T02:55:22.000Z",
                                "updatedAt": "2021-01-24T02:55:22.000Z",
                                "menuItems": {
                                    "createdAt": "2021-01-24T02:55:22.000Z",
                                    "updatedAt": "2021-01-24T02:55:22.000Z",
                                    "ItemId": 1,
                                    "MenuId": 1
                                }
                            }
                        ]
                    },
                    "server": {
                        "id": 1,
                        "fullName": "John Doe",
                        "username": "username",
                        "password": "password",
                        "accessCode": "0",
                        "isManager": true,
                        "createdAt": "2021-01-24T02:55:22.000Z",
                        "updatedAt": "2021-01-24T02:55:22.000Z"
                    },
                    "Logs": []
                },
                {
                    "id": 3,
                    "itemName": "Stir Fry",
                    "price": 6.25,
                    "tax": 0.0825,
                    "status": "OPEN",
                    "createdAt": "2021-01-24T20:32:54.000Z",
                    "updatedAt": "2021-01-24T20:32:54.000Z",
                    "OrderId": 1,
                    "ItemId": 2,
                    "serverId": 1,
                    "Item": {
                        "id": 2,
                        "itemName": "Spicy Chicken Burger",
                        "price": 4,
                        "tax": 0.0825,
                        "createdAt": "2021-01-24T02:55:22.000Z",
                        "updatedAt": "2021-01-24T02:55:22.000Z",
                        "Menus": [
                            {
                                "id": 1,
                                "menuName": "Main Menu",
                                "createdAt": "2021-01-24T02:55:22.000Z",
                                "updatedAt": "2021-01-24T02:55:22.000Z",
                                "menuItems": {
                                    "createdAt": "2021-01-24T02:55:22.000Z",
                                    "updatedAt": "2021-01-24T02:55:22.000Z",
                                    "ItemId": 2,
                                    "MenuId": 1
                                }
                            }
                        ]
                    },
                    "server": {
                        "id": 1,
                        "fullName": "John Doe",
                        "username": "username",
                        "password": "password",
                        "accessCode": "0",
                        "isManager": true,
                        "createdAt": "2021-01-24T02:55:22.000Z",
                        "updatedAt": "2021-01-24T02:55:22.000Z"
                    },
                    "Logs": []
                }
            ],
            "Logs": [],
            "Customers": [
                {
                    "id": 1,
                    "fullName": "Steve Lee",
                    "phone": "123-456-7890",
                    "address": "12345 someStree st",
                    "city": "someCity",
                    "state": "someState",
                    "zip": "12345",
                    "note": "He runs",
                    "createdAt": "2021-01-24T02:55:22.000Z",
                    "updatedAt": "2021-01-24T02:55:22.000Z",
                    "customerOrders": {
                        "createdAt": "2021-01-24T02:55:23.000Z",
                        "updatedAt": "2021-01-24T02:55:23.000Z",
                        "CustomerId": 1,
                        "OrderId": 1
                    }
                }
            ],
            "Tables": [
                {
                    "id": 1,
                    "tableName": "T1",
                    "x": 25,
                    "y": 25,
                    "createdAt": "2021-01-24T02:55:22.000Z",
                    "updatedAt": "2021-01-24T02:55:22.000Z",
                    "TableAreaId": 1,
                    "orderTables": {
                        "createdAt": "2021-01-24T02:55:23.000Z",
                        "updatedAt": "2021-01-24T02:55:23.000Z",
                        "OrderId": 1,
                        "TableId": 1
                    },
                    "TableArea": {
                        "id": 1,
                        "areaName": "Main Area",
                        "createdAt": "2021-01-24T02:55:22.000Z",
                        "updatedAt": "2021-01-24T02:55:22.000Z"
                    }
                }
            ]
        }}/>
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

    </div>
</div>

        <div className="container text-right">
            <button className="btn btn-danger">Exit</button>
        </div>
    </>
    )
}

export default PaymentPage;