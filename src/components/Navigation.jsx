import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/categories">
            Categorías
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
