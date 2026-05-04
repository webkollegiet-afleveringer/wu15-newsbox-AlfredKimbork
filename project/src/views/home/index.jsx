import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import MainHeader from "../../components/MainHeader";
import CategorySection from "../../components/CategorySection";
import Navigation from "../../components/Navigation";

import handleSetStorage from "../../lib/handleSetStorage";
import handleGetStorage from "../../lib/handleGetStorage";
import getArticles from "../../lib/getArticles";

// import useFetch from "../../hook/useFetch";
import useCategories from "../../hook/useCategories";



const Home = () => {
    const { categories, setCategories } = useCategories()
    // let { pending, data, error } = useFetch("https://api.nytimes.com/svc/news/v3/content/nyt/all.json?api-key=hYKoGMGrVAgJGhmpwhlfUNA7JETCZS5lk2KmPvEbwHJGYGeR&limit=50", "home");

    const queryClient = useQueryClient();
    let { isPending, data, error }  = useQuery({
        queryKey: ["homeData"],
        queryFn: () => getArticles("https://api.nytimes.com/svc/news/v3/content/nyt/all.json?api-key=hYKoGMGrVAgJGhmpwhlfUNA7JETCZS5lk2KmPvEbwHJGYGeR&limit=50"),
        staleTime: 1000 * 60 * 1, // 1 minute
    });
    
    let groupedCategories = [];
    if (data) groupedCategories = Array.from(Map.groupBy(data.results, article => article.section));

    handleSetStorage(groupedCategories);
    useEffect(() => {
        setCategories(handleGetStorage());
    }, [groupedCategories])

    return (
        <>
            <MainHeader />
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
            <Navigation currentView={"home"} />
        </>

    )
}

export default Home