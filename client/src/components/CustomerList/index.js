import React, {Component}  from "react";
import InputWithIcon from "../InputWithIcon";

class CustomerList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.customers.map(customer => {
                        return <li> {customer.fullName} - {customer.phone} </li>
                    })
                }
            </ul>
        );
    }
}

export default CustomerList;