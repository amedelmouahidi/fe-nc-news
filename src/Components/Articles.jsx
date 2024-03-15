import axios from "axios";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import ChangePage from "./SwitchPage";
import { Link } from "react-router-dom";
import { fetchArticles } from "./api";

export default function Articles() {
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("desc");
  const [articleList, setArticleList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchArticles(page, sortBy, orderBy).then(({ data: { articles } }) => {
      setArticleList(articles);
      window.scrollTo(0, 0);
      setLoading(false);
    });
  }, [page, sortBy, orderBy]);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <ChangePage setPage={setPage} page={page} />
      <h1>Articles</h1>
      <div>
        <div className="sort-bar">
          <label className="sort-label">Sort By:</label>
          <select
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="created_at">Date</option>
            <option value="comment_count">Comment Count</option>
            <option value="votes">Votes</option>
          </select>
          <label className="sort-label order-label">Order:</label>
          <select
            className="sort-select"
            value={orderBy}
            onChange={(e) => setOrderBy(e.target.value)}
          >
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </div>
      </div>
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
