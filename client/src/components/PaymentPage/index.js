import React from "react";
import { Redirect } from "react-router-dom";
import { useOrder, useSetOrder } from "../../Contexts/order-context";
import { useUser } from "../../Contexts/user-context";
import ReceiptPreview from "../ReceiptPreview";

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

    <div className="card m-3" style={{float: "right"}}>
            <div className="card-header">
            Cash Payment:
            </div>
        <div className="card-body">
        </div>
    </div>


    </>
    )
}

export default PaymentPage;