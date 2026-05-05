import { useContext } from "react";
import { searchContext } from "../contexts/searchContext";

const useSearch = () => {
    const { search, setSearchParams } = useContext(searchContext)
    return { search, setSearchParams}
}

export default useSearch