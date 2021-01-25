import React, {createContext, useContext, useState} from "react";

export const UserContext = createContext();
export const SetUserContext = createContext();

export function useUser() {
    return useContext(UserContext);
}

export function useSetUser() {
    return useContext(SetUserContext);
}

export function UserProvider({children}) {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={user}>
            <SetUserContext.Provider value={setUser}>
                {children}
            </SetUserContext.Provider>
        </UserContext.Provider>
    );
}