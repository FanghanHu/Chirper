import React, { useEffect, useState } from "react";
import { DEFAULT_CUSTOMER, useCustomer, useSetCustomer } from "../../Contexts/customer-context";
import axios from "axios";
import CustomerList from "../CustomerList";
import InputWithIcon from "../InputWithIcon";
import TextAreaWithIcon from "../TextAreaWithIcon";
import {Redirect, useHistory} from "react-router-dom";
import {useUser} from "../../Contexts/user-context";

export default function CustomerInfoForm() {
    const [filter, setFilter] = useState("");
    const [customers, setCustomers] = useState([]);
    const customer = useCustomer();
    const setCustomer = useSetCustomer();

    useEffect(() => {
        let mounted = true;
        getAllCustomers().then(res => {
            if(mounted) {
                setCustomers(res.data);
            }
        });

        return () => {
            mounted = false;
        }
    })

    //check if user is logged in
    const user = useUser();
    const history = useHistory();
    if(!user) {
        return <Redirect to="/"/>
    }

    const getAllCustomers = function () {
        return axios.get("/api/customer/getAll/");
    }

    const deleteCustomer = function(customer) {
        axios.delete('/api/customer/delete/' + customer.id).then(res => {
            setCustomer({...DEFAULT_CUSTOMER});
            getAllCustomers();
        })
    }

    const goToOrder = async function() {
        if(customer && customer.id) {
            const updateRes = await axios.post("/api/customer/update/", {...customer, id: undefined, customerId: customer.id});
            await setCustomer(updateRes.data);
            history.push('/orderPage');
        } else {
            const createRes = await axios.post("/api/customer/add/", customer);
            await setCustomer(createRes.data);
            history.push('/orderPage');
        }
    }

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
                                        placeholder: "search",
                                        onChange: (e) => {setFilter(e.target.value)}
                                    }}
                                />
                                <CustomerList customers={customers} filter={filter}/>
                                <hr/>
                                <button className="btn btn-primary mr-3 float-right" onClick={() => {
                                    setCustomer({...DEFAULT_CUSTOMER});
                                }}>New Customer</button>
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
                                            placeholder: "Name",
                                            value: customer.fullName,
                                            onChange: (e) => { setCustomer({ ...customer, fullName: e.target.value }) }
                                        }}
                                    />
                                </div>
                                <div className="col-6">
                                    <InputWithIcon
                                        label={<i className='fa fa-phone' />}
                                        inputProps={{
                                            placeholder: "Phone Number",
                                            value: customer.phone,
                                            onChange: (e) => { setCustomer({ ...customer, phone: e.target.value }) }
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <InputWithIcon
                                        label={<i className='fa fa-home' />}
                                        inputProps={{
                                            placeholder: "Address",
                                            value: customer.address,
                                            onChange: (e) => { setCustomer({ ...customer, address: e.target.value }) }
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <InputWithIcon
                                        label={<i className='fas fa-city' />}
                                        inputProps={{
                                            placeholder: "City",
                                            value: customer.city,
                                            onChange: (e) => { setCustomer({ ...customer, city: e.target.value }) }
                                        }}
                                    />
                                </div>
                                <div className="col-4">
                                    <InputWithIcon
                                        label={<i className='fas fa-city' />}
                                        inputProps={{
                                            placeholder: "State",
                                            value: customer.state,
                                            onChange: (e) => { setCustomer({ ...customer, state: e.target.value }) }
                                        }}
                                    />
                                </div>
                                <div className="col-4">
                                    <InputWithIcon
                                        label={<i className='fas fa-city' />}
                                        inputProps={{
                                            placeholder: "Zip",
                                            value: customer.zip,
                                            onChange: (e) => { setCustomer({ ...customer, zip: e.target.value }) }
                                        }}
                                    />
                                </div>
                            </div>
                            <TextAreaWithIcon
                                label={<><i className='fas fa-book' /> <span>Notes:</span></>}
                                inputProps={{
                                    rows: 5
                                }}
                            />
                        </div>
                        <div className="p-5">
                            <button className="btn btn-danger float-left" onClick={() => {
                                if(customer && customer.id) {
                                    deleteCustomer(customer);
                                }
                            }}>Delete Customer</button>
                            <button className="btn btn-light float-right  mx-3" onClick={() => {
                                setCustomer({...DEFAULT_CUSTOMER});
                                history.push('/mainMenu');
                            }}>Cancel</button>
                            <button className="btn btn-success float-right  mx-3" onClick={goToOrder}>{customer&&customer.id?"Update and Order" : "Save and Order"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}