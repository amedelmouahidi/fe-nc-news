import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Logo from "./logo.png";

export default function Header() {
  return (
    <nav className="header">
      <Link to={"/"}>
        <img src={Logo} alt="Logo" style={{ height: "70px", width: "auto" }} />{" "}
      </Link>
      <ul className="menu">
        <li className="menu-item">
          <Link to="/articles">Articles</Link>
        </li>
        <li className="menu-item">
          <Link to="/topics">Topics</Link>
        </li>
        <li className="menu-item">
          <Link to="/users">Users</Link>
        </li>
        <Button variant="contained" color="success">
          Post
        </Button>
      </ul>
    </nav>
  );
}
