import { useEffect } from "react";
import { useHomePageLogic } from "./useHomePageLogic";
import ProductCard from "../../components/productCard/ProductCard";
import Filter from "../../components/filter/Filter";
import Search from "../../components/search/Search";
import "./HomePage.css";

const categories = [
  "activitats-virtuals",
  "rutes-i-visites",
  "dansa",
  "concerts",
  "teatre",
  "exposicions",
  "conferencies",
  "infantil",
  "festivals-i-mostres",
];

const HomePage = () => {
  const {
    status,
    error,
    loadItems,
    filteredMuseums,
    handleFilterChange,
    handleSearch,
  } = useHomePageLogic();

  useEffect(() => {
    loadItems();
  }, []);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="homepage">
      <Search onSearch={handleSearch} />
      <Filter categories={categories} onFilterChange={handleFilterChange} />
      <div className="container grid">
        {filteredMuseums.map((museum, index) => (
          <ProductCard
            key={index}
            image={museum.imgapp}
            title={museum.denominaci}
            description={museum.descripcio}
            link={museum.enllac1_url}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
