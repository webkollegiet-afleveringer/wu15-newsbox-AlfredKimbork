import MainHeader from "../../components/MainHeader";
import CategoryToggle from "../../components/CategoryToggle";
import Navigation from "../../components/Navigation";

import handleGetStorage from "../../lib/handleGetStorage";
import useCategories from "../../hook/useCategories";

import "./Settings.scss"
import { useEffect } from "react";

const Settings = () => {
    const { categories, setCategories } = useCategories();
    console.log(categories);

    useEffect(() => {
        setCategories(handleGetStorage());
    }, []);

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