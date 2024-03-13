import axios from "axios";
import { useEffect, useState, useContext } from "react";
import ArticleCard from "./ArticleCard";
import ChangePage from "./SwitchPage";
import { Link } from "react-router-dom";
import ArticleIdContext from "../Contexts/ArticleId";
import { fetchArticles } from "./api";

export default function Articles() {
  const [articleList, setArticleList] = useState([]);
  const [page, setPage] = useState(1);
  const { setArticleId } = useContext(ArticleIdContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles(page).then(({ data: { articles } }) => {
      setArticleList(articles);
      window.scrollTo(0, 0);
    });
  }, [page]);

  return (
    <div>
      <h1>Articles</h1>
      <ChangePage setPage={setPage} page={page} />
      <ul className="article-list">
        {articleList.map((article) => {
          return (
            <Link
              key={article.article_id}
              onClick={() => {
                setArticleId(article.article_id);
              }}
              to={`/articles/${article.article_id}`}
            >
              <ArticleCard article={article} />
            </Link>
          );
        })}
      </ul>
      <ChangePage setPage={setPage} page={page} />
      <p>Page: {page}</p>
    </div>
  );
}
