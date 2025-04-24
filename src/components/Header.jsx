import Navigation from "./Navigation.jsx";
export function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <h1 className="title">Perritex</h1>
        <Navigation></Navigation>
      </div>
    </header>
  );
}

export default Header;
