const getArticles = async url => {
    const response = await fetch(url);
    if (response.headers.get("content-type").includes("application/json")) return response.json();
    else if (response.headers.get("content-type").includes("application/text")) return response.text();
}

export default getArticles