import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Header() {
  return (
    <nav className="header">
      <h1>NC News</h1>
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
