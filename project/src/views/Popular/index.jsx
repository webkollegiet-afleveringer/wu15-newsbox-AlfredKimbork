import { useEffect } from "react"
import { useQuery, useQueryClient } from "@tanstack/react-query"

import CategorySection from "../../components/CategorySection"

import handleSetStorage from "../../lib/handleSetStorage"
import handleGetStorage from "../../lib/handleGetStorage"
import getArticles from "../../lib/getArticles"

// ! ignore this, this is the old way of fetching data, we are now using useCachedQuery instead
// import useFetch from "../../hook/useFetch"

import useCachedQuery from "../../hook/useCachedQuery"
import useCategories from "../../hook/useCategories"

const Popular = () => {
    const { categories, setCategories } = useCategories()

    // ! ignore this, this is the old way of fetching data, we are now using useCachedQuery instead
    // let { pending, data, error } = useFetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=hYKoGMGrVAgJGhmpwhlfUNA7JETCZS5lk2KmPvEbwHJGYGeR", "popular")
    const {isPending, data, error} = useCachedQuery("https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=hYKoGMGrVAgJGhmpwhlfUNA7JETCZS5lk2KmPvEbwHJGYGeR", ["popularData"])

    let groupedCategories = [];
    if (data) groupedCategories = Array.from(Map.groupBy(data.results, article => article.section));
    
    handleSetStorage(groupedCategories);
    useEffect(() => {
        setCategories(handleGetStorage());
    }, [groupedCategories])
    
    return (
        <>
            {data && groupedCategories.map(thisCategory => {
                if(categories.find(category => category.categoryName === thisCategory[0] && category.enabled === false)) return;                
                return <CategorySection key={thisCategory[0]} viewLocation={"popular"} categoryName={thisCategory[0]} articles={thisCategory[1]} />
            })}
        </>
    )
}

export default Popular