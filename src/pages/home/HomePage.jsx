import React, { useState, useEffect } from "react";
import { useHomePageLogic } from "./useHomePageLogic";
import ProductCard from "../../components/productCard/ProductCard";
import Filter from "../../components/filter/Filter";
import Search from "../../components/search/Search";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button"; // Ensure Button is imported
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
  const [showSearch, setShowSearch] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

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
      <Header
        onToggleSearch={() => setShowSearch(!showSearch)}
        onToggleFilter={() => setShowFilter(!showFilter)}
      />
      {showSearch && <Search onSearch={handleSearch} />}
      {showFilter && (
        <Filter categories={categories} onFilterChange={handleFilterChange} />
      )}
      <div className="container grid">
        {filteredMuseums.map((museum, index) => (
          <ProductCard
            key={index}
            image={`https://agenda.cultura.gencat.cat${museum.imgapp}`}
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
