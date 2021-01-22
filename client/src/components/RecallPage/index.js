import React from "react";


function RecallPage() {
    return (
        <>
        <div className="order-form" style={{textAlign: "right"}}>
            <label for="order">Order #</label>
            <input type="text" className="order" id="order#"></input>
            <button className="btn-lg btn-success" type="go">Go</button>
        </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Order #</th>
                        <th scope="col">Table</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
            <div className="container text-right"> 
            <button type="button" className="btn btn-success btn-lg" style={{position: "relative" ,right: "25px" }}>Open</button>
            <button type="button" className="btn btn-danger btn-lg" style={{position: "relative" ,left: "25px"}}>Exit</button>
            </div>
        </>
    )
}

export default RecallPage;