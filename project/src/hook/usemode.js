import { useContext } from "react"
import { modeContext } from "../contexts/modeContext"

const useMode = () => {
    const { mode, setMode } = useContext(modeContext);
    return {mode, setMode}
}

export default useMode;