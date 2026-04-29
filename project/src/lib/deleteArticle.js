const deleteArticle = (ls, categoryName, url) => {
    const newLocalStorage = ls.map(category => {
        if(category.categoryName === categoryName && category.savedArticles.length !== 1) return { ...category, savedArticles: category.savedArticles.filter(article => article.url !== url) } 
            else if(category.categoryName === categoryName) return { categoryName: categoryName, enabled: category.enabled }
                else return category;
    });

    return newLocalStorage;
}

export default deleteArticle