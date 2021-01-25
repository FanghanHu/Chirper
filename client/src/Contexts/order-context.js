import React, {createContext, useContext, useState} from "react";

export const OrderContext = createContext();
export const SetOrderContext = createContext();

export function useOrder() {
    return useContext(OrderContext);
}

export function useSetOrder() {
    return useContext(SetOrderContext);
}

export function OrderProvider({children}) {
    const [order, setOrder] = useState(null);

    return (
        <OrderContext.Provider value={order}>
            <SetOrderContext.Provider value={setOrder}>
                {children}
            </SetOrderContext.Provider>
        </OrderContext.Provider>
    );
}