import { useEffect } from "react";

import MainHeader from "../../components/MainHeader";
import CategoryToggle from "../../components/CategoryToggle";
import Navigation from "../../components/Navigation";

import useCategories from "../../hook/useCategories";
import useMode from "../../hook/usemode";

import handleGetStorage from "../../lib/handleGetStorage";
import handleMode from "../../lib/handleMode";

import "./Settings.scss"

const Settings = () => {
    const { categories, setCategories } = useCategories();
    const { mode, setMode } = useMode();

    useEffect(() => {
        setCategories(handleGetStorage());
    }, []);

    return (
        <>
            <MainHeader />
            <button className="__modeBtn" onClick={() => handleMode(mode, setMode)}>Toggle dark mode</button>
            <ul>
                {categories.sort((a, b) => a.categoryName.localeCompare(b.categoryName)).map(category => {
                    const { enabled, categoryName} = category
                    return <CategoryToggle key={categoryName} categoryName={categoryName} enabled={enabled} />
                })}
            </ul>
            <p className="__version">Version 4.8.15.16.23.42</p>
            <Navigation currentView={"settings"} />
        </>
    )
}

export default Settings