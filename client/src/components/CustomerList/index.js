import React from "react";
import {useCustomer, useSetCustomer} from "../../Contexts/customer-context";


export default function CustomerList(props) {

    const selectedCustomer = useCustomer();
    const setCustomer = useSetCustomer();

    return (
        <ul className="list-unstyled text-center">
            {
                props.customers.map(customer => {
                    const text = `${customer.fullName} - ${customer.phone}`
                    if (!props.filter || text.toLowerCase().includes(props.filter.toLowerCase())) {
                        return (
                            <li key={customer.id}>
                                <button className={"btn m-1 " + (selectedCustomer && (selectedCustomer.id === customer.id ) ? "btn-success" : "btn-light")} onClick={() => { setCustomer(customer); }}>
                                    {text}
                                </button>
                            </li>
                        );
                    } else {
                        return null;
                    }

                })
            }
        </ul>
    );
} 