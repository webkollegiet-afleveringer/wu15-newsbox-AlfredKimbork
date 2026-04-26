import { useContext } from "react";
import { collapseContext } from "../contexts/collapseContext";

const useCollapse = () => {
    const {collapsed, setCollapsed} = useContext(collapseContext);
    return {collapsed, setCollapsed};
}

export default useCollapse;
