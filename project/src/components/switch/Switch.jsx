import handleClick from "../../lib/handleClick"
import useCategories from "../../hook/useCategories";

import "./Switch.css"

const Switch = ({ categoryName, enabled }) => {
    const { categories, setCategories } = useCategories()

    return (
        <button onClick={() => handleClick(categoryName, enabled, { categories, setCategories })} className={`__switch ${enabled ? "--enabled" : ""}`}>
            <div className="__circle" />
        </button>
    )
}

export default Switch