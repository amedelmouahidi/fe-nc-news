import axios from "axios";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import ChangePage from "./SwitchPage";
import { Link } from "react-router-dom";
import { fetchArticles } from "./api";

export default function Articles() {
  const [articleList, setArticleList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchArticles(page).then(({ data: { articles } }) => {
      setArticleList(articles);
      window.scrollTo(0, 0);
      setLoading(false);
    });
  }, [page]);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <h1>Articles</h1>
      <ChangePage setPage={setPage} page={page} />
      <ul className="article-list">
        {articleList.map((article) => {
          return (
            <Link
              key={article.article_id}
              to={`/articles/${article.article_id}`}
            >
              <ArticleCard article={article} setArticleList={setArticleList} />
            </Link>
          );
        })}
      </ul>
      <ChangePage setPage={setPage} page={page} />
      <p>Page: {page}</p>
    </div>
  );
}
