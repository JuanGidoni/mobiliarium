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
          <Link className="nav-link" to="/categoria/animales">
            Categorías
          </Link>
        </li>

        <li>
          <Link className="nav-link" to="/filtros">
            Filtros
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
