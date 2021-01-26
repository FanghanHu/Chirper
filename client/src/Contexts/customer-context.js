import React, {createContext, useContext, useState} from "react";

export const CustomerContext = createContext();
export const SetCustomerContext = createContext();

export function useCustomer() {
    return useContext(CustomerContext);
}

export function useSetCustomer() {
    return useContext(SetCustomerContext);
}

/**
 * use this to set the value back to default
 */
export const DEFAULT_CUSTOMER = {
    fullName:"",
    phone:"",
    address:"",
    city:"",
    state:"",
    zip:""
};

export function CustomerProvider({children}) {
    const [customer, setCustomer] = useState({...DEFAULT_CUSTOMER});

    return (
        <CustomerContext.Provider value={customer}>
            <SetCustomerContext.Provider value={setCustomer}>
                {children}
            </SetCustomerContext.Provider>
        </CustomerContext.Provider>
    );
}