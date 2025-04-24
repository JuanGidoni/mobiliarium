import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <h1 className="title">Perritex</h1>
        <nav>
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
      </div>
    </header>
  );
}

export default Header;
