import { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Articles from "./Components/Articles";
import SingleArticle from "./Components/SingleArticle";
import UserContext from "./Contexts/SignedInUser";

function App() {
  const [signedInUser, setSignedInUser] = useState({
    username: "cooljmessy",
    name: "Peter Messy",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/1/1a/MR_MESSY_4A.jpg/revision/latest/scale-to-width-down/250?cb=20170730171002",
  });
  return (
    <>
      <UserContext.Provider value={{ signedInUser, setSignedInUser }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path={`/articles/:articleId`} element={<SingleArticle />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}
export default App;
