import { useEffect, useState } from "react";
import { fetchArticles } from "./api";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [popularArticleList, setPopularArticleList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(1, "votes", "desc").then(({ data: { articles } }) => {
      setPopularArticleList(articles);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <h1>Loading Articles</h1>
  ) : (
    <>
      <h1 className="heading">Stay Informed, Stay Connected!</h1>
      <ul>
        {popularArticleList.map((article) => {
          return (
            <Link
              key={article.article_id}
              to={`/articles/${article.article_id}`}
            >
              <ArticleCard
                article={article}
                setArticleList={setPopularArticleList}
              />
            </Link>
          );
        })}
      </ul>
    </>
  );
}
