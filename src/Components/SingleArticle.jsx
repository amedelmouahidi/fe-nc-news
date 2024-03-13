import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import CommentCard from "./CommentCard";
import { fetchSingleArticle } from "./api";

export default function SingleArticle() {
  const { articleId } = useParams();
  const [articleInfo, setArticleInfo] = useState({});
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    fetchSingleArticle(articleId).then(({ article, comments }) => {
      setArticleInfo(article);
      setCommentsList(comments);
    });
  }, [articleId]);

  return (
    <>
      <ArticleCard article={articleInfo} />
      <h2>Comments</h2>
      <ul className="comments-list">
        {commentsList.map((comment) => {
          return <CommentCard comment={comment} key={comment.comment_id} />;
        })}
      </ul>
    </>
  );
}
