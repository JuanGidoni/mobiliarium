import { useState, useEffect } from "react";
import { useHomePageLogic } from "./useHomePageLogic";
import ProductCard from "../../components/productCard/ProductCard";
import Filter from "../../components/filter/Filter";
import Search from "../../components/search/Search";
import Image from "../../components/image/Image"; // Ensure this import is correct
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

  const [selectedMuseum, setSelectedMuseum] = useState(null);

  useEffect(() => {
    loadItems();
  }, []);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  const handleCardClick = (museum) => {
    setSelectedMuseum(museum);
  };

  const handleClose = () => {
    setSelectedMuseum(null);
  };

  return (
    <div className="homepage">
      <Search onSearch={handleSearch} />
      <Filter categories={categories} onFilterChange={handleFilterChange} />
      <div className="container grid">
        {filteredMuseums.map((museum, index) => (
          <ProductCard
            key={index}
            image={`https://agenda.cultura.gencat.cat${museum.imgapp}`}
            title={museum.denominaci}
            description={museum.descripcio}
            link={museum.enllac1_url}
            onClick={() => handleCardClick(museum)}
          />
        ))}
      </div>
      {selectedMuseum && (
        <div className="modal" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={handleClose}>
              &times;
            </span>
            <Image
              url={`https://agenda.cultura.gencat.cat${selectedMuseum.imgapp}`}
              alt={selectedMuseum.denominaci}
              className="modal-image"
            />
            <h2 className="product-title">{selectedMuseum.denominaci}</h2>
            <p className="product-description">{selectedMuseum.descripcio}</p>
            <a href={selectedMuseum.enllac1_url} className="product-link">
              Learn More
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
