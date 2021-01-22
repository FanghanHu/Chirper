import React, { Component } from "react";
import CustomerList from "../CustomerList";
import InputWithIcon from "../InputWithIcon";
import axios from "axios";
import TextAreaWithIcon from "../TextAreaWithIcon";

class CustomerInfoForm extends Component {
    constructor() {
        super();
        this.state = { customers: [], fileter: "", selectedCustomer: null};
        this.getAllCustomers();
    }

    getAllCustomers = () => {
        const customers = axios.get("/api/customer/getAll/").then(res => {
            this.setState({ customers: res.data });
        })
    }

    setFilter = (e) => {
        this.setState({filter: e.target.value});
    }

    selectCustomer = (customer) => {
        this.setState({selectedCustomer: customer});
    }

    render() {
        return (
            <>
                <div className="d-flex justify-content-center">
                    <div className="row m-5 w-75">
                        <div className="col-4 p-5">
                            <div className="card">
                                <div className="card-header">
                                    Customers
                                </div>
                                <div className="card-body">
                                    <InputWithIcon
                                        label={<i className='fa fa-search' />}
                                        inputProps={{
                                            placeholder:"search",
                                            onChange:this.setFilter
                                        }}
                                    />
                                    <CustomerList customers={this.state.customers} filter={this.state.filter} selectCustomer={this.selectCustomer} selectedCustomer={this.state.selectedCustomer}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 p-5">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-6">
                                        <InputWithIcon
                                            label={<i className='fa fa-user' />}
                                            inputProps={{
                                                placeholder:"Name",
                                                value: this.state.selectedCustomer?this.state.selectedCustomer.fullName:"",
                                                onChange: (e) => {this.setState({selectedCustomer: {...this.state.selectedCustomer, fullName: e.target.value}})}
                                            }}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <InputWithIcon
                                            label={<i className='fa fa-phone' />}
                                            inputProps={{
                                                placeholder:"Phone Number",
                                                value: this.state.selectedCustomer?this.state.selectedCustomer.phone:"",
                                                onChange: (e) => {this.setState({selectedCustomer: {...this.state.selectedCustomer, phone: e.target.value}})}
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <InputWithIcon
                                            label={<i className='fa fa-home' />}
                                            inputProps={{
                                                placeholder:"Address",
                                                value: this.state.selectedCustomer?this.state.selectedCustomer.address:"",
                                                onChange: (e) => {this.setState({selectedCustomer: {...this.state.selectedCustomer, address: e.target.value}})}
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <InputWithIcon
                                            label={<i className='fas fa-city' />}
                                            inputProps={{
                                                placeholder:"City",
                                                value: this.state.selectedCustomer?this.state.selectedCustomer.city:"",
                                                onChange: (e) => {this.setState({selectedCustomer: {...this.state.selectedCustomer, city: e.target.value}})}
                                            }}
                                        />
                                    </div>
                                    <div className="col-4">
                                        <InputWithIcon
                                            label={<i className='fas fa-city' />}
                                            inputProps={{
                                                placeholder:"State",
                                                value: this.state.selectedCustomer?this.state.selectedCustomer.state:"",
                                                onChange: (e) => {this.setState({selectedCustomer: {...this.state.selectedCustomer, state: e.target.value}})}
                                            }}
                                        />
                                    </div>
                                    <div className="col-4">
                                        <InputWithIcon
                                            label={<i className='fas fa-city' />}
                                            inputProps={{
                                                placeholder:"Zip",
                                                value: this.state.selectedCustomer?this.state.selectedCustomer.zip:"",
                                                onChange: (e) => {this.setState({selectedCustomer: {...this.state.selectedCustomer, zip: e.target.value}})}
                                            }}
                                        />
                                    </div>
                                </div>
                                <TextAreaWithIcon
                                    label={<><i className='fas fa-book' /> <span>Notes:</span></>}
                                    inputProps={{
                                        rows:5
                                    }}
                                />
                            </div>
                            <div className="p-5">
                                <button className="btn btn-danger float-left">Delete Customer</button>
                                <button className="btn btn-light float-right  mx-3">Cancel</button>
                                <button className="btn btn-success float-right  mx-3">Update and Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CustomerInfoForm;