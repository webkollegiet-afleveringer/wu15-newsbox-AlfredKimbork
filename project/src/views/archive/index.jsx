import MainHeader from "../../components/MainHeader"
import CategorySection from "../../components/CategorySection"
import Navigation from "../../components/Navigation"

import handleGetStorage from "../../lib/handleGetStorage"

import useCategories from "../../hook/useCategories"

import "./Archive.scss"
import { useEffect } from "react"

const Archive = () => {
    const { categories, setCategories } = useCategories()
    useEffect(() => {
        setCategories(handleGetStorage("categories"))
    }, [])
    
    return (
        <>
            <MainHeader />
            {categories.map(category => {
                if(category.savedArticles) return <CategorySection key={category.categoryName} viewLocation={"archive"} categoryName={category.categoryName} articles={category.savedArticles} />
            })}
            <Navigation currentView={"archive"} />
        </>
    )
}

export default Archive