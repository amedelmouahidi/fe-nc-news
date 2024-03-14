import axios from "axios";

export const fetchArticles = (page) => {
  return axios.get(`https://nc-news-i824.onrender.com/api/articles?p=${page}`);
};

export const fetchSingleArticle = (articleId) => {
  const articlePromise = axios.get(
    `https://nc-news-i824.onrender.com/api/articles/${articleId}`
  );
  const commentsPromise = axios.get(
    `https://nc-news-i824.onrender.com/api/articles/${articleId}/comments`
  );

  return Promise.all([articlePromise, commentsPromise]).then(
    ([articleResponse, commentsResponse]) => {
      return {
        article: articleResponse.data.article,
        comments: commentsResponse.data.comments,
      };
    }
  );
};

export const patchArticleVotes = (articleId, voteChange) => {
  return axios.patch(
    `https://nc-news-i824.onrender.com/api/articles/${articleId}`,
    { inc_votes: voteChange }
  );
};
