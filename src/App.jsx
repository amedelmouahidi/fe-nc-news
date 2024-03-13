import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Articles from "./Components/Articles";
import ArticleIdContext from "./Contexts/ArticleId";
import SingleArticle from "./Components/SingleArticle";

function App() {
  const [articleId, setArticleId] = useState(null);
  return (
    <>
      <ArticleIdContext.Provider value={{ articleId, setArticleId }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path={`/articles/:articleId`} element={<SingleArticle />} />
        </Routes>
      </ArticleIdContext.Provider>
    </>
  );
}
export default App;
