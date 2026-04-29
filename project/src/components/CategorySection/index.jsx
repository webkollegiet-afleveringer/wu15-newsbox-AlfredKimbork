import { IoChevronForwardOutline } from "react-icons/io5"
import { useState } from "react"

import useFetch from "../../hook/useFetch"
import ArticleCard from "../ArticleCard"
import CategoryHeading from "../CategoryHeading"

import "./CategorySection.scss"


const CategorySection = ({ viewLocation, categoryName, articles }) => {
    
    return (
        <>
            <details>
                <summary className="__header --flex --align-center --justify-between">
                    <CategoryHeading categoryName={categoryName} />
                    <IoChevronForwardOutline size={"1.5rem"} className="__marker" />
                </summary>
            </details>
            <ul className="__content-list">
                {articles.map(article => <li className="__content-item --flex" key={article.url}><ArticleCard viewLocation={viewLocation} categoryName={categoryName} url={article.url} img={
                    viewLocation === 'home' ? article.multimedia?.[0]?.url
                        : viewLocation === 'popular' ? article.media?.[0]?.['media-metadata'][0].url
                        : article.img
                } title={article.title} abstract={article.abstract} /></li>)}
            </ul>
        </>
    )
}

export default CategorySection