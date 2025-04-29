import { useState } from "react";
import ProductCard from "./ProductCard";
import Filter from "./Filter";
import Search from "./Search";
import "./HomePage.css";

const products = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Tutankhamun_-_The_King%27s_Chair.jpg/800px-Tutankhamun_-_The_King%27s_Chair.jpg",
    title: "Modern Chair",
    description: "A stylish and comfortable chair.",
    price: "$99.99",
    category: "Chair",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Chaise_artisanale_coup%C3%A9e_laissant_voir_son_int%C3%A9rieur%2C_Passage_du_Chantier%2C_onzi%C3%A8me_arrondissement_de_Paris%2C_France_01.jpg/800px-Chaise_artisanale_coup%C3%A9e_laissant_voir_son_int%C3%A9rieur%2C_Passage_du_Chantier%2C_onzi%C3%A8me_arrondissement_de_Paris%2C_France_01.jpg",
    title: "Elegant Sofa",
    description: "A luxurious sofa for your living room.",
    price: "$299.99",
    category: "Sofa",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Sermentizon_prie-Dieu.jpg/800px-Sermentizon_prie-Dieu.jpg",
    title: "Wooden Table",
    description: "A sturdy wooden table.",
    price: "$149.99",
    category: "Table",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/0601_Hotel_Maitrier_%C3%A0_Saint-Germain.jpg/320px-0601_Hotel_Maitrier_%C3%A0_Saint-Germain.jpg",
    title: "Office Desk",
    description: "A sleek office desk.",
    price: "$199.99",
    category: "Desk",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Tutankhamun_-_The_King%27s_Chair.jpg/800px-Tutankhamun_-_The_King%27s_Chair.jpg",
    title: "Modern Chair",
    description: "A stylish and comfortable chair.",
    price: "$99.99",
    category: "Chair",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Chaise_artisanale_coup%C3%A9e_laissant_voir_son_int%C3%A9rieur%2C_Passage_du_Chantier%2C_onzi%C3%A8me_arrondissement_de_Paris%2C_France_01.jpg/800px-Chaise_artisanale_coup%C3%A9e_laissant_voir_son_int%C3%A9rieur%2C_Passage_du_Chantier%2C_onzi%C3%A8me_arrondissement_de_Paris%2C_France_01.jpg",
    title: "Elegant Sofa",
    description: "A luxurious sofa for your living room.",
    price: "$299.99",
    category: "Sofa",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Sermentizon_prie-Dieu.jpg/800px-Sermentizon_prie-Dieu.jpg",
    title: "Wooden Table",
    description: "A sturdy wooden table.",
    price: "$149.99",
    category: "Table",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/0601_Hotel_Maitrier_%C3%A0_Saint-Germain.jpg/320px-0601_Hotel_Maitrier_%C3%A0_Saint-Germain.jpg",
    title: "Office Desk",
    description: "A sleek office desk.",
    price: "$199.99",
    category: "Desk",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Tutankhamun_-_The_King%27s_Chair.jpg/800px-Tutankhamun_-_The_King%27s_Chair.jpg",
    title: "Modern Chair",
    description: "A stylish and comfortable chair.",
    price: "$99.99",
    category: "Chair",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Chaise_artisanale_coup%C3%A9e_laissant_voir_son_int%C3%A9rieur%2C_Passage_du_Chantier%2C_onzi%C3%A8me_arrondissement_de_Paris%2C_France_01.jpg/800px-Chaise_artisanale_coup%C3%A9e_laissant_voir_son_int%C3%A9rieur%2C_Passage_du_Chantier%2C_onzi%C3%A8me_arrondissement_de_Paris%2C_France_01.jpg",
    title: "Elegant Sofa",
    description: "A luxurious sofa for your living room.",
    price: "$299.99",
    category: "Sofa",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Sermentizon_prie-Dieu.jpg/800px-Sermentizon_prie-Dieu.jpg",
    title: "Wooden Table",
    description: "A sturdy wooden table.",
    price: "$149.99",
    category: "Table",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/0601_Hotel_Maitrier_%C3%A0_Saint-Germain.jpg/320px-0601_Hotel_Maitrier_%C3%A0_Saint-Germain.jpg",
    title: "Office Desk",
    description: "A sleek office desk.",
    price: "$199.99",
    category: "Desk",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Tutankhamun_-_The_King%27s_Chair.jpg/800px-Tutankhamun_-_The_King%27s_Chair.jpg",
    title: "Modern Chair",
    description: "A stylish and comfortable chair.",
    price: "$99.99",
    category: "Chair",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Chaise_artisanale_coup%C3%A9e_laissant_voir_son_int%C3%A9rieur%2C_Passage_du_Chantier%2C_onzi%C3%A8me_arrondissement_de_Paris%2C_France_01.jpg/800px-Chaise_artisanale_coup%C3%A9e_laissant_voir_son_int%C3%A9rieur%2C_Passage_du_Chantier%2C_onzi%C3%A8me_arrondissement_de_Paris%2C_France_01.jpg",
    title: "Elegant Sofa",
    description: "A luxurious sofa for your living room.",
    price: "$299.99",
    category: "Sofa",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Sermentizon_prie-Dieu.jpg/800px-Sermentizon_prie-Dieu.jpg",
    title: "Wooden Table",
    description: "A sturdy wooden table.",
    price: "$149.99",
    category: "Table",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/0601_Hotel_Maitrier_%C3%A0_Saint-Germain.jpg/320px-0601_Hotel_Maitrier_%C3%A0_Saint-Germain.jpg",
    title: "Office Desk",
    description: "A sleek office desk.",
    price: "$199.99",
    category: "Desk",
  },
];

const categories = ["Chair", "Sofa", "Table", "Desk"];
const priceRanges = ["Low", "Medium", "High"];

function HomePage() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (filters) => {
    const { categories } = filters;
    let newFilteredProducts = products;

    if (categories.length > 0) {
      newFilteredProducts = newFilteredProducts.filter((product) =>
        categories.includes(product.category)
      );
    }

    setFilteredProducts(newFilteredProducts);
  };

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const newFilteredProducts = products.filter(
      (product) =>
        product.title.toLowerCase().includes(lowercasedQuery) ||
        product.description.toLowerCase().includes(lowercasedQuery) ||
        product.category.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredProducts(newFilteredProducts);
  };

  return (
    <div className="homepage">
      <Search onSearch={handleSearch} />
      <Filter
        categories={categories}
        priceRanges={priceRanges}
        onFilterChange={handleFilterChange}
      />
      <div className="container grid">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
