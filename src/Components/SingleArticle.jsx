import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import CommentCard from "./CommentCard";
import { fetchSingleArticle, postComment } from "./api";
import UserContext from "../Contexts/SignedInUser";

export default function SingleArticle() {
  const { articleId } = useParams();
  const [articleInfo, setArticleInfo] = useState([]);
  const [commentsList, setCommentsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { signedInUser } = useContext(UserContext);
  const [commentInput, setCommentInput] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [error] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchSingleArticle(articleId).then(({ article, comments }) => {
      setArticleInfo([article]);
      setCommentsList(comments);
      setLoading(false);
    });
  }, [articleId]);

  const BUTTON_DISABLED_DURATION = 3000;

  function handleSubmit(e) {
    e.preventDefault();

    setButtonDisabled(true);

    const body = {
      username: signedInUser.username,
      body: commentInput,
    };
    postComment(articleId, body).then((comment) => {
      setCommentsList((currList) => [comment, ...currList]);
      setCommentInput("");

      setTimeout(() => {
        setButtonDisabled(false);
      }, BUTTON_DISABLED_DURATION);
    });
  }

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <ArticleCard article={articleInfo[0]} setArticleList={setArticleInfo} />
      <h2>Comments</h2>
      <div className="comments-list">
        <form onSubmit={handleSubmit}>
          <label htmlFor="comment-body">
            Comment as {signedInUser.username}
          </label>
          <br />
          <textarea
            className="comment-input"
            id="comment-body"
            value={commentInput}
            placeholder={`Add a comment for ${articleInfo[0].author}`}
            onChange={(e) => {
              setCommentInput(e.target.value);
            }}
            required
          ></textarea>
          <button disabled={buttonDisabled}>Comment</button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
      <ul className="comments-list">
        {commentsList.map((comment) => {
          return <CommentCard comment={comment} key={comment.comment_id} />;
        })}
      </ul>
    </>
  );
}
