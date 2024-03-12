export default function ArticleCard({ article }) {
  const { title, author, article_img_url, comment_count, votes, topic } =
    article;

  return (
    <li className="article-card">
      <div className="article-card-header">
        <p className="title">{title}</p>
        <p className="author">posted by: {author}</p>
      </div>
      {article_img_url && (
        <img className="article-card-img" src={article_img_url} alt={title} />
      )}
      <div className="article-card-footer">
        <p>comments: {comment_count}</p>
        <p>votes: {votes}</p>
        <p>topic: {topic}</p>
      </div>
    </li>
  );
}
