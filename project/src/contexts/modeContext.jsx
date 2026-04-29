import { createContext, useState } from "react";

const modeContext = createContext()
const ModeProvider = ({ children }) => {
    const [mode, setMode] = useState("light");

    return (
        <modeContext.Provider value={{ mode, setMode }}>
            { children }
        </modeContext.Provider>
    )
}

export { modeContext }
export default ModeProvider