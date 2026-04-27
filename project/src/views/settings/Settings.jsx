import CategoryToggle from "../../components/categoryToggle/CategoryToggle";
import MainHeader from "../../components/mainHeader/MainHeader";
import Navigation from "../../components/navigation/Navigation";

import useCategories from "../../hook/useCategories";

import "./Settings.css"

const Settings = () => {

    const { categories } = useCategories()
    return (
        <>
            <MainHeader />
            <ul>
                {categories.map(category => {
                    const { enabled, categoryName} = category
                    return <CategoryToggle key={categoryName} categoryName={categoryName} enabled={enabled} />
                })}
            </ul>
            <Navigation currentView={"settings"} />
        </>
    )
}

export default Settings