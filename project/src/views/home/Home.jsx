import useFetch from "../../hook/useFetch"

const Home = () => {
    const sections = { world: "world", health: "health", sports: "sports", business: "business", travel: "travel" }

    let {pending, data, error} = useFetch(`https://api.nytimes.com/svc/news/v3/content/nyt/${sections.business}.json?api-key=hYKoGMGrVAgJGhmpwhlfUNA7JETCZS5lk2KmPvEbwHJGYGeR`);

    console.log(pending, data, error);
    return (
        <h1>hello world</h1>
    )
}

export default Home