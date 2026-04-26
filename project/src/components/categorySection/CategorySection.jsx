import { IoChevronForwardOutline } from "react-icons/io5"
import useFetch from "../../hook/useFetch"
import ArticleCard from "../articleCard/ArticleCard"
import CategoryHeading from "../categoryHeading/CategoryHeading"

import "./CategorySection.css"


const CategorySection = ({ categoryName, delay }) => {
    let { pending, data, error } = useFetch(`https://api.nytimes.com/svc/news/v3/content/nyt/${categoryName}.json?api-key=hYKoGMGrVAgJGhmpwhlfUNA7JETCZS5lk2KmPvEbwHJGYGeR`, delay)
    console.log(data);

    return (
        <section>
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
        </section>
    )
}

export default CategorySection