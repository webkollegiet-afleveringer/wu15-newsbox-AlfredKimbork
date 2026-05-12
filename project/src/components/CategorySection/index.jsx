import { useState } from "react"
import { useLocation } from "react-router-dom";

import { IoChevronForwardOutline } from "react-icons/io5"

import useFetch from "../../hook/useFetch"
import ArticleCard from "./ArticleCard"
import CategoryHeading from "../CategoryHeading"

import "./CategorySection.scss"


const CategorySection = ({ categoryName, articles }) => {
    const location = useLocation();
    
    return (
        <>
            <details>
                <summary className="__header --flex --align-center --justify-between">
                    <CategoryHeading categoryName={categoryName} />
                    <IoChevronForwardOutline size={"1.5rem"} className="__marker" />
                </summary>
            </details>
            <ul className="__content-list">
                {articles.map(article => <li className="__content-item --flex" key={article.url}>
                    <ArticleCard categoryName={categoryName} url={article.url} img={
                        location.pathname === '/' ? article.multimedia?.[0]?.url
                            : location.pathname === '/popular' ? article.media?.[0]?.['media-metadata'][0].url
                                : article.img
                    } title={article.title} abstract={article.abstract} />
                </li>)}
            </ul>
        </>
    )
}

export default CategorySection