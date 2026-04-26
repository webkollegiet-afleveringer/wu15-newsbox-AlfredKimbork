import "./ArticleCard.css"

const ArticleCard = ({ url, img, title, summary }) => {

    return (
        <article>
            <a href={url} className="__articleCard --black --no-underline --flex --gap-16px">
                <img className="__img" src={img} alt={title} />
                <div>
                    <h3 className="__heading --playfair">{title}</h3>
                    <p className="__summary">{summary.slice(0, 85) + "..."}</p>
                </div>
            </a>
        </article>
    )
}

export default ArticleCard