import { useEffect } from "react"

import MainHeader from "../../components/MainHeader"
import CategorySection from "../../components/CategorySection"
import Navigation from "../../components/Navigation"

import handleSetStorage from "../../lib/handleSetStorage"
import handleGetStorage from "../../lib/handleGetStorage"

import useCategories from "../../hook/useCategories"
import useFetch from "../../hook/useFetch"

import "./Popular.scss"

const Popular = () => {
    const { categories, setCategories } = useCategories()
    let { pending, data, error } = useFetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=hYKoGMGrVAgJGhmpwhlfUNA7JETCZS5lk2KmPvEbwHJGYGeR")

    let groupedCategories = [];
    if (data) groupedCategories = Array.from(Map.groupBy(data.results, article => article.section));
    

    handleSetStorage(groupedCategories);
    useEffect(() => {
        setCategories(handleGetStorage());
    }, [groupedCategories])
    
    return (
        <>
            <MainHeader />
            {data && groupedCategories.map(thisCategory => {
                if(categories.find(category => category.categoryName === thisCategory[0] && category.enabled === false)) return;                
                return <CategorySection key={thisCategory[0]} viewLocation={"popular"} categoryName={thisCategory[0]} articles={thisCategory[1]} />
            })}
            <Navigation currentView={"popular"} />
        </>
    )
}

export default Popular