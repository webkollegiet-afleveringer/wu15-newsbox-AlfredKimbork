import { createContext, useState } from "react";
import handleGetStorage from "../lib/handleGetStorage";

const categoriesContext = createContext()
const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState(handleGetStorage());

    // ! ignore this, this is the old way of handling categories, we are now using handleGetStorage and handleSetStorage instead
    // const [categories, setCategories] = useState([
    //     {categoryName: "business", enabled: true},
    //     {categoryName: "health", enabled: true},
    //     {categoryName: "sports", enabled: true},
    //     {categoryName: "travel", enabled: true},
    //     {categoryName: "world", enabled: true},
    // ]);

    return (
        <categoriesContext.Provider value={{ categories, setCategories }}>
            { children }
        </categoriesContext.Provider>
    )
} 

export { categoriesContext }
export default CategoriesProvider