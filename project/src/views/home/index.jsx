import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import SearchBar from "../../components/Searchbar";
import CategorySection from "../../components/CategorySection";

import handleSetStorage from "../../lib/handleSetStorage";
import handleGetStorage from "../../lib/handleGetStorage";
import getArticles from "../../lib/getArticles";

// import useFetch from "../../hook/useFetch";
import useCachedQuery from "../../hook/useCachedQuery";
import useCategories from "../../hook/useCategories";
import useSearch from "../../hook/useSearch";



const Home = () => {
    const { categories, setCategories } = useCategories()
    const { search } = useSearch();
    
    // let { pending, data, error } = useFetch("https://api.nytimes.com/svc/news/v3/content/nyt/all.json?api-key=hYKoGMGrVAgJGhmpwhlfUNA7JETCZS5lk2KmPvEbwHJGYGeR&limit=50", "home");
    const { isPending, data, error } = useCachedQuery(search !== "" ? `https://api.nytimes.com/svc/news/v3/content/nyt/articlesearch.json?q=${search}&api-key=hYKoGMGrVAgJGhmpwhlfUNA7JETCZS5lk2KmPvEbwHJGYGeR` : "https://api.nytimes.com/svc/news/v3/content/nyt/all.json?api-key=hYKoGMGrVAgJGhmpwhlfUNA7JETCZS5lk2KmPvEbwHJGYGeR&limit=50", ["homeData", search]);

    let groupedCategories = [];
    if (data) groupedCategories = Array.from(Map.groupBy(data.results, article => article.section));

    handleSetStorage(groupedCategories);
    useEffect(() => {
        setCategories(handleGetStorage());
    }, [groupedCategories])

    return (
        <>
            {// for each preset category, check if the category is enabled, if it is enabled, render the category section, if not, skip it
                /* {categories.map(category => {
                    const { enabled, categoryName } = category
                    if (enabled === false) return
                    return <HomeCategorySection key={categoryName} categoryName={categoryName}  fetchURL={`https://api.nytimes.com/svc/news/v3/content/nyt/${categoryName}.json?api-key=hYKoGMGrVAgJGhmpwhlfUNA7JETCZS5lk2KmPvEbwHJGYGeR`}/>
                    })} */}

            {categories && groupedCategories.map(thisCategory => {
                if(categories.find(category => category.categoryName === thisCategory[0] && category.enabled === false)) return; 
                return <CategorySection key={thisCategory[0]} viewLocation={"home"} categoryName={thisCategory[0]} articles={thisCategory[1]} />
            })}
        </>
    )
}

export default Home