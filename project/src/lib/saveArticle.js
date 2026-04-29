const saveArticle = (ls, categoryName, url, img, title, abstract) => {
    const newLocalStorage = ls.map(category => {
        if (category.categoryName === categoryName && category.savedArticles) {

            if(category.savedArticles.find(article => article.url === url)) return category 
                else return { ...category, savedArticles: [{ categoryName, url, img, title, abstract }, ...category.savedArticles] }
        } else if (category.categoryName === categoryName) return { ...category, savedArticles: [{ categoryName, url, img, title, abstract }] }
            return category;
    }); 

    return newLocalStorage
}

export default saveArticle