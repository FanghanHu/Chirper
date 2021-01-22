import React, {Component}  from "react";
import InputWithIcon from "../InputWithIcon";

class CustomerList extends Component {
    render() {
        return (
            <ul className="list-unstyled">
                {
                    this.props.customers.map(customer => {
                        const text = `${customer.fullName} - ${customer.phone}`
                        if(!this.props.filter || text.toLowerCase().includes(this.props.filter.toLowerCase()))
                        {
                            return (
                                <li key={customer.id}>
                                    <button className={"btn " + (this.props.selectedCustomer && (this.props.selectedCustomer.id===customer.id)?"btn-success":"btn-light")}  onClick={() => {this.props.selectCustomer(customer);}}>
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
}

export default CustomerList;