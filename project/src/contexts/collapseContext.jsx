import { createContext, useState } from "react";

export const collapseContext = createContext();
const collapseProvider = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <collapseContext.Provider value={{ collapsed, setCollapsed }}>
            {children}
        </collapseContext.Provider>
    )
}