import { Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import HomePage from "../pages/HomePage.jsx";


function AppRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<div>Categories</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default AppRoutes;