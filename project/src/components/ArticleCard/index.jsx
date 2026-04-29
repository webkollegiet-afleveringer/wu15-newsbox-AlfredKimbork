import { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";

import saveArticle from "../../lib/saveArticle";
import deleteArticle from "../../lib/deleteArticle";

import "./ArticleCard.scss"
import useCategories from "../../hook/useCategories";

const ArticleCard = ({ viewLocation, categoryName, url, img, title, abstract }) => {
    const { setCategories } = useCategories()

    const [endX, setEndX] = useState(0);
    const [startX, setStartX] = useState(0);

    const handleStartMove = e => {
        setStartX(e.touches[0].clientX);
    }
    const handleMove = e => {
        setEndX(e.touches[0].clientX)
    }

    const handleEndMove = e => {
        if (endX - startX < 0 && Math.abs(endX-startX) >= 104) {
            const ls = JSON.parse(localStorage.getItem("categories"))
            let newLocalStorage;

            if(viewLocation === "archive") newLocalStorage = deleteArticle(ls, categoryName, url);
                else newLocalStorage = saveArticle(ls, categoryName, url, img, title, abstract);

            setCategories(newLocalStorage);
            localStorage.setItem("categories", JSON.stringify(newLocalStorage));
        }
        
        setEndX(0)
        setStartX(0)
    }

    return (
        <article className={`__articleContainer --grid ${viewLocation === "archive" ? "--bg-red" : "--bg-green"}`}>
            <FaRegBookmark className="__bookmark" size={"1.5rem"} color="#FFF" />
            <a 
                href={url} 
                onTouchStart={handleStartMove} 
                onTouchMove={handleMove} 
                onTouchEnd={handleEndMove}
                style={
                    endX !== 0 && Math.abs(endX - startX) < 104 && endX - startX < 0 ? { transform: `translateX(${endX - startX}px)`} 
                    : endX !== 0 && Math.abs(endX - startX) > 104 && endX - startX < 0 ? { transform: `translateX(-104px)` } : { transform: `translateX(0px)`, transition: "transform .1s ease-out" }
                }
                className="__articleCard --black --no-underline --flex --gap-16px"
            >
                <img className="__img" src={img} alt={title} />
                <div>
                    <h3 className="__heading --playfair">{title}</h3>
                    <p className="__summary">{abstract}</p>
                </div>
            </a>
        </article>
    )
}

export default ArticleCard