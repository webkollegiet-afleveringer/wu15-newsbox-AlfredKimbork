import MainHeader from "../../components/mainHeader/MainHeader"
import PopularCategorySection from "../../components/popularCategorySection/PopularCategorySection"
import Navigation from "../../components/navigation/Navigation"

import useFetch from "../../hook/useFetch"
import useCategories from "../../hook/useCategories"

import "./Popular.css"

const Popular = () => {
    const { categories } = useCategories()
    let { pending, data, error } = useFetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=hYKoGMGrVAgJGhmpwhlfUNA7JETCZS5lk2KmPvEbwHJGYGeR")

    let groupedCategories = [];
    if (data) groupedCategories = Array.from(Map.groupBy(data.results, article => article.section));

    return (
        <>
            <MainHeader />
            {data && groupedCategories.map((category) => <PopularCategorySection key={category[0]} categoryName={category[0]} articles={category[1]} />)}
            <Navigation currentView={"popular"} />
        </>
    )
}

export default Popular