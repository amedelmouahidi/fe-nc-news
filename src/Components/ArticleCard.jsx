import axios from "axios";
import { useState } from "react";
import { patchArticleVotes } from "./api";

export default function ArticleCard({ article, setArticleList }) {
  const [votingInProgress, setVotingInProgress] = useState(false);

  function handleLike(e) {
    e.preventDefault();

    if (votingInProgress) {
      return;
    }

    setArticleList((currList) => {
      const newList = currList.map((item) => {
        if (item.article_id === +e.target.value) {
          item.votes = item.votes + +e.target.id;
        }
        return item;
      });
      return newList;
    });

    setVotingInProgress(true);

    patchArticleVotes(e.target.value, e.target.id)
      .then((response) => {})
      .catch((error) => {
        console.error("Error patching article votes:", error);
      })
      .finally(() => {
        setVotingInProgress(false);
      });
  }

  return (
    <li className="article-card">
      <div className="article-card-header">
        <p>{article.title}</p>
        <p>posted by: {article.author}</p>
      </div>
      <img className="article-card-img" src={article.article_img_url} />
      <p>{article.body}</p>
      <div className="article-card-footer">
        <p>{article.comment_count} comments</p>
        <p>
          <button value={article.article_id} id="1" onClick={handleLike}>
            ⬆️
          </button>
          <button value={article.article_id} id="-1" onClick={handleLike}>
            ⬇️
          </button>{" "}
          {article.votes} votes{" "}
        </p>
        <p>topic: {article.topic}</p>
      </div>
    </li>
  );
}
