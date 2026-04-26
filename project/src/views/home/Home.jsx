import MainHeader from "../../components/mainHeader/MainHeader";
import CategorySection from "../../components/categorySection/CategorySection";
import Navigation from "../../components/navigation/Navigation";

import useCategories from "../../hook/useCategories";

const Home = () => {
    const { categories } = useCategories()
    console.log(categories);

    return (
        <>
            <MainHeader />
            {categories.map((category, i) => {
                const { enabled, categoryName } = category
                if (enabled === false) return
                return <CategorySection key={categoryName} categoryName={categoryName} delay={i} />
            })}
            <Navigation currentView={"home"} />
        </>
    )
}

export default Home