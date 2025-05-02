import { useEffect } from "react";
import { useCategoryDetailPageLogic } from "./useCategoryDetailPageLogic";
import ProductCard from "../../../components/productCard/ProductCard";
import "./CategoryDetailPage.css";

const CategoryDetailPage = () => {
  const { 
    category, 
    status, 
    error, 
    data, 
    loadCategoryItems 
  } = useCategoryDetailPageLogic();

  useEffect(() => {
    loadCategoryItems();
  }, [category]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

return (
    <div className="category-detail-page">
        <h1>Category: {category.replace(/-/g, " ")}</h1>
        <p>Advanced filtering options will be available soon, including by date, scope, location, and more.</p>
        <div className="container grid">
            {data.map((item, index) => (
                <ProductCard
                    key={index}
                    image={`https://agenda.cultura.gencat.cat${item.imgapp}`}
                    title={item.denominaci || "Unnamed Item"}
                    description={item.descripcio || "No description available"}
                    link={item.enllac1_url}
                />
            ))}
        </div>
    </div>
);
};

export default CategoryDetailPage;