import { useEffect } from "react";
import useCategories from "../hook/useCategories"
import handleGetStorage from "./handleGetStorage";
import handleSetStorage from "./handleSetStorage";

const handleClick = (categoryName, enabled, { categories, setCategories }) => {
    
    setCategories(categories.map(category => {
        if (category.categoryName === categoryName) return {...category, enabled: !enabled}
        return category
    }));
    
    localStorage.setItem("categories", JSON.stringify(categories.map(category => {
        if (category.categoryName === categoryName) return {...category, enabled: !enabled}
        return category
    })));
    
//     localStorage.setItem("categories", JSON.stringify(categories.map(category => {
//         if (category.categoryName === categoryName) return { categoryName, enabled: !enabled}
//         return { ...category }
//     })))
}

export default handleClick