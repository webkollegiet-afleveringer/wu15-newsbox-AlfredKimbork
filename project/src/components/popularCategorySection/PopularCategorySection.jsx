import { IoChevronForwardOutline } from "react-icons/io5"
import { useState } from "react"

import useFetch from "../../hook/useFetch"
import ArticleCard from "../articleCard/ArticleCard"
import CategoryHeading from "../categoryHeading/CategoryHeading"

import "./PopularCategorySection.css"


const PopularCategorySection = ({ categoryName, articles }) => {

    return (
        <>
            <details>
                <summary className="__header --flex --align-center --justify-between">
                    <CategoryHeading categoryName={categoryName} />
                    <IoChevronForwardOutline size={"1.5rem"} className="__marker" />
                </summary>
            </details>
            <ul className="__content-list">
                {articles.map(article => <li className="__content-item --flex" key={article.uri}><ArticleCard url={article.url} img={article.media?.[0]?.['media-metadata'][0].url} title={article.title} summary={article.abstract} /></li>)}
            </ul>
        </>
    )
}

export default PopularCategorySection