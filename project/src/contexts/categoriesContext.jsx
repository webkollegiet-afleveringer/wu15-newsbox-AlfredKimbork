import { createContext, useState } from "react";
import handleGetStorage from "../lib/handleGetStorage";

const categoriesContext = createContext()
const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState(handleGetStorage());

    return (
        <categoriesContext.Provider value={{ categories, setCategories }}>
            { children }
        </categoriesContext.Provider>
    )
} 

export { categoriesContext }
export default CategoriesProvider