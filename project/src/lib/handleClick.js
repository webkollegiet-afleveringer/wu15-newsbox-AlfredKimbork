import useCategories from "../hook/useCategories"

const handleClick = (categoryName, enabled, { categories, setCategories }) => {
    setCategories(categories.map(category => {
        if (category.categoryName !== categoryName) return category
        return {...category, enabled: !enabled}
    }));
    console.log(categories);
}

export default handleClick