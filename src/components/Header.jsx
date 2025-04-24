import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <h1 className="title">Nombre de la app</h1>

        <nav>
          <ul className="nav-list">
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
      </div>
    </header>
  );
}

export default Header;
