import { createContext, useState } from "react";
import handleGetStorage from "../lib/handleGetStorage";

export const categoriesContext = createContext()
const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState(handleGetStorage());

    return (
        <categoriesContext.Provider value={{ categories, setCategories }}>
            { children }
        </categoriesContext.Provider>
    )
} 
export default CategoriesProvider