import React, {createContext, useContext, useState} from "react";

export const TableContext = createContext();
export const setTableContext = createContext();

export function useTable() {
    return useContext(TableContext);
}

export function useSetTable() {
    return useContext(setTableContext);
}

export function TableProvider({children}) {
    const [table, setTable] = useState(null);

    return (
        <TableContext.Provider value={table}>
            <setTableContext.Provider value={setTable}>
                {children}
            </setTableContext.Provider>
        </TableContext.Provider>
    );
}