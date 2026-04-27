import MainHeader from "../../components/mainHeader/MainHeader";
import HomeCategorySection from "../../components/homeCategorySection/HomeCategorySection";
import Navigation from "../../components/navigation/Navigation";

import useCategories from "../../hook/useCategories";

const Home = () => {
    const { categories } = useCategories()

    return (
        <>
            <MainHeader />
            {categories.map(category => {
                const { enabled, categoryName } = category
                if (enabled === false) return
                return <HomeCategorySection key={categoryName} categoryName={categoryName}  fetchURL={`https://api.nytimes.com/svc/news/v3/content/nyt/${categoryName}.json?api-key=hYKoGMGrVAgJGhmpwhlfUNA7JETCZS5lk2KmPvEbwHJGYGeR`}/>
            })}
            <Navigation currentView={"home"} />
        </>
    )
}

export default Home