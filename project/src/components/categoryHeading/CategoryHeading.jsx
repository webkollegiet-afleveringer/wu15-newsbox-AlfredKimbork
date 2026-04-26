import NewsifyIcon from "../newsifyIcon/NewsifyIcon"

import "./CategoryHeading.css"

const CategoryHeading = ({ categoryName, location }) => {

    return <h2 className="__heading --playfair --grey --flex --align-center --gap-16px"><NewsifyIcon size={"small"} />{categoryName}</h2>
}

export default CategoryHeading