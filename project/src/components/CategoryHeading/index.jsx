import NewsifyIcon from "../NewsifyIcon"

import "./CategoryHeading.scss"

const CategoryHeading = ({ categoryName }) => {

    return <h2 className="__heading --playfair --grey --flex --align-center --gap-16px"><NewsifyIcon size={"small"} />{categoryName}</h2>
}

export default CategoryHeading