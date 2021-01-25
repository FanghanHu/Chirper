import React, {createContext, useContext, useState} from "react";

export const CustomerContext = createContext();
export const SetCustomerContext = createContext();

export function useCustomer() {
    return useContext(CustomerContext);
}

export function useSetCustomer() {
    return useContext(SetCustomerContext);
}

export function CustomerProvider({children}) {
    const [customer, setCustomer] = useState(null);

    return (
        <CustomerContext.Provider value={customer}>
            <SetCustomerContext.Provider value={setCustomer}>
                {children}
            </SetCustomerContext.Provider>
        </CustomerContext.Provider>
    );
}