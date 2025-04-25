import "./App.css";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer";
import Button from "./components/button/Button";

function App() {
  return (
    <>
      <Header />
      <Footer />
      <Button text="Test 123" />
    </>
  );
}

export default App;
