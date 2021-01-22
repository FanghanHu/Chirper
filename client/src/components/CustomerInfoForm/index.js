import React, { Component, createRef, useState } from "react";
import CustomerList from "../CustomerList";
import InputWithIcon from "../InputWithIcon";
import axios from "axios";
import TextAreaWithIcon from "../TextAreaWithIcon";

class CustomerInfoForm extends Component {
    constructor() {
        super();
        this.state = { customers: [] };
        this.getAllCustomers();
    }

    getAllCustomers = () => {
        const customers = axios.get("/api/customer/getAll/").then(res => {
            this.setState({ customers: res.data });
        })
    }

    render() {
        const ref = createRef();
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
                                        ref={ref}
                                        placeholder="search"
                                        defaultValue=""
                                    />
                                    <CustomerList customers={this.state.customers} />
                                </div>
                            </div>
                        </div>
                        <div className="col-8 p-5">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-6">
                                        <InputWithIcon
                                            label={<i className='fa fa-user' />}
                                            ref={ref}
                                            placeholder="FullName"
                                            defaultValue=""
                                        />
                                    </div>
                                    <div className="col-6">
                                        <InputWithIcon
                                            label={<i className='fa fa-phone' />}
                                            ref={ref}
                                            placeholder="Phone Number"
                                            defaultValue=""
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <InputWithIcon
                                            label={<i className='fa fa-home' />}
                                            ref={ref}
                                            placeholder="Address"
                                            defaultValue=""
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <InputWithIcon
                                            label={<i className='fas fa-city' />}
                                            ref={ref}
                                            placeholder="City"
                                            defaultValue=""
                                        />
                                    </div>
                                    <div className="col-4">
                                        <InputWithIcon
                                            label={<i className='fas fa-city' />}
                                            ref={ref}
                                            placeholder="State"
                                            defaultValue=""
                                        />
                                    </div>
                                    <div className="col-4">
                                        <InputWithIcon
                                            label={<i className='fas fa-city' />}
                                            ref={ref}
                                            placeholder="Zip"
                                            defaultValue=""
                                        />
                                    </div>
                                </div>
                                <TextAreaWithIcon
                                    label={<><i className='fas fa-book' /> <span>Notes:</span></>}
                                    ref={ref}
                                    placeholder=""
                                    defaultValue=""
                                    rows={5}
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