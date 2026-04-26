import { useContext } from "react";
import { categoriesContext } from "../contexts/categoriesContext";

const useCategories = () => {
    const {categories, setCategories} = useContext(categoriesContext);
    return {categories, setCategories};
}

export default useCategories;
