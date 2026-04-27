import CategoryHeading from "../categoryHeading/CategoryHeading"
import Switch from "../switch/Switch"

import "./CategoryToggle.css"

const CategoryToggle = ({ categoryName, enabled }) => {

    return (
        <li className="__toggle-section --flex --justify-between">
            <CategoryHeading categoryName={categoryName} />
            <Switch categoryName={categoryName} enabled={enabled} />
        </li>
    )
}

export default CategoryToggle