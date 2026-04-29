import CategoryHeading from "../CategoryHeading"
import Switch from "../Switch"

import "./CategoryToggle.scss"

const CategoryToggle = ({ categoryName, enabled }) => {

    return (
        <li className="__toggle-section --flex --justify-between">
            <CategoryHeading categoryName={categoryName} />
            <Switch categoryName={categoryName} enabled={enabled} />
        </li>
    )
}

export default CategoryToggle