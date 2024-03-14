import { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Articles from "./Components/Articles";
import SingleArticle from "./Components/SingleArticle";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path={`/articles/:articleId`} element={<SingleArticle />} />
      </Routes>
    </>
  );
}
export default App;
