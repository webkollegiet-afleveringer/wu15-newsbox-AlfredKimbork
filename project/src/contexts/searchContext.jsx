import { createContext, useContext } from "react";
import { useSearchParams } from "react-router-dom";

export const searchContext = createContext()
const SearchProvider = ({ children }) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("search") ?? "";

    return (
        <searchContext.Provider value={{ search, setSearchParams }}>
            {children}
        </searchContext.Provider>
    )
}
export default SearchProvider