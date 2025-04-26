import logoImg from "../../assets/Logo.png";
import Navigation from "../navigation/Navigation.jsx";
import "./Header.css";

export function Header() {
  return (
    <header className="main-header">
      <div className="header-container">
        <img
          src={logoImg}
          alt="the logo of the web. A chair and the name (Mobiliarium)"
          className="logo"
        />
        <h1 className="title">Mobiliarium</h1>
      </div>

      <Navigation />
    </header>
  );
}

export default Header;
