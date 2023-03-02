import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    const articlePost = posts.map(article => {
        return <Article key={article.title} title={article.title} date={article.date} preview={article.preview}/>
    });
    return(
        <main>
            {articlePost}
        </main>
    )
}

export default ArticleList