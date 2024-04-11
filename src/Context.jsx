import { createContext, useState } from "react";

export const myContext = createContext()

export const MyProvider = ({ children }) => {
    const [data, setData] = useState('Hello from Context!');

    return (
        <myContext.Provider value={{data, setData }} >
            {children}
        </myContext.Provider>
    )
    
}
