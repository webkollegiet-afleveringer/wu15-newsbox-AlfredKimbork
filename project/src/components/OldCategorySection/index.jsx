import { IoChevronForwardOutline } from "react-icons/io5"
import { useState } from "react"

import useFetch from "../../hook/useFetch"
import ArticleCard from "../ArticleCard/ArticleCard"
import CategoryHeading from "../CategoryHeading"

import "./HomeCategorySection.scss"


const HomeCategorySection = ({ categoryName, fetchURL }) => {
    let { pending, data, error } = useFetch(fetchURL)

    return (
        <>
            <details>
                <summary className="__header --flex --align-center --justify-between">
                    <CategoryHeading categoryName={categoryName} />
                    <IoChevronForwardOutline size={"1.5rem"} className="__marker" />
                </summary>
            </details>
            <ul className="__content-list">
                {pending && <h2>Pending...</h2>}
                {data && data.results.map(article => <li className="__content-item --flex" key={article.uri}><ArticleCard url={article.url} img={article.multimedia[0].url} title={article.title} summary={article.abstract} /></li>)}
                {error && <h2>Error: {error}</h2>}
            </ul>
        </>
    )
}

export default HomeCategorySection