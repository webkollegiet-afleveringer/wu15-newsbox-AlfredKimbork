import useCategories from "../hook/useCategories";

// const { setCategories } = useCategories()

const handleSetStorage = (groupedCategories) => {    
    const ls = JSON.parse(localStorage.getItem("categories"))

    if (!ls) {
        const newLocalStorage = groupedCategories.map(thisCategory => { return { categoryName: thisCategory[0], enabled: true }});

        localStorage.setItem("categories", JSON.stringify([...newLocalStorage]));
    } else {
        const newLocalStorage = groupedCategories.map(thisCategory => {
            
            if (ls.find(category => category.categoryName === thisCategory[0])) return;
            else return { categoryName: thisCategory[0], enabled: true };
        }).filter(entry => entry !== undefined)
        
        localStorage.setItem("categories", JSON.stringify([...ls, ...newLocalStorage]));
    }
}

export default handleSetStorage