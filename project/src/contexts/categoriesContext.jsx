import { createContext, useState } from "react";

export const categoriesContext = createContext()
const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState([ 
        {enabled: true, categoryName: "health"}, 
        {enabled: true, categoryName: "sports"}, 
        {enabled: true, categoryName: "travel"},
        {enabled: false, categoryName: "world"}, 
        {enabled: false, categoryName: "business"}, 
    ]);

    return (
        <categoriesContext.Provider value={{ categories, setCategories }}>
            { children }
        </categoriesContext.Provider>
    )
} 
export default CategoriesProvider