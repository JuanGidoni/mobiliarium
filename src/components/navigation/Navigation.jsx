import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/categorias">
            Categorías
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
