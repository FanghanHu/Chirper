import React, { useState } from "react";
import axios from "axios";


function RecallPage() {
    return (
        <div className="d-flex flex-column justify-content-center h-100">
            <div className="card mx-auto w-75 h-75">
                <div className="card-header">
                    Orders
                </div>
                <div className="card-body">
                    <div className="order-form" style={{ textAlign: "right" }}>
                        <label htmlFor="order" className="mr-2">Order Number: </label>
                        <input type="text" id="order"></input>
                        <button className="btn btn-success m-1">Go</button>
                    </div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Order Number</th>
                                <th scope="col">Table</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                            </tr>
                        </tbody>
                    </table>
                    <div style={{position:"absolute", bottom: "1em", right:"1em"}}>
                        <button type="button" className="btn btn-success btn-lg float-right m-1" style={{width:"8em"}}>Open</button>
                        <button type="button" className="btn btn-danger btn-lg float-right m-1" style={{width:"8em"}}>Exit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecallPage;