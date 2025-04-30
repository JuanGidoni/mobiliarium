import "./CategoriesPage.css";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import { Link } from "react-router-dom";

const categories = [
    { name: "Virtual Activities", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Live_8_-_edinburgh_50000_-_the_final_push_rjl.jpg/640px-Live_8_-_edinburgh_50000_-_the_final_push_rjl.jpg" },
    { name: "Routes and Visits", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Live_8_-_edinburgh_50000_-_the_final_push_rjl.jpg/640px-Live_8_-_edinburgh_50000_-_the_final_push_rjl.jpg" },
    { name: "Dance", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Live_8_-_edinburgh_50000_-_the_final_push_rjl.jpg/640px-Live_8_-_edinburgh_50000_-_the_final_push_rjl.jpg" },
    { name: "Concerts", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Live_8_-_edinburgh_50000_-_the_final_push_rjl.jpg/640px-Live_8_-_edinburgh_50000_-_the_final_push_rjl.jpg" },
    { name: "Theater", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Live_8_-_edinburgh_50000_-_the_final_push_rjl.jpg/640px-Live_8_-_edinburgh_50000_-_the_final_push_rjl.jpg" },
    { name: "Exhibitions", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Live_8_-_edinburgh_50000_-_the_final_push_rjl.jpg/640px-Live_8_-_edinburgh_50000_-_the_final_push_rjl.jpg" },
    { name: "Conferences", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Live_8_-_edinburgh_50000_-_the_final_push_rjl.jpg/640px-Live_8_-_edinburgh_50000_-_the_final_push_rjl.jpg" },
    { name: "Children", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Live_8_-_edinburgh_50000_-_the_final_push_rjl.jpg/640px-Live_8_-_edinburgh_50000_-_the_final_push_rjl.jpg" },
    { name: "Festivals and Showcases", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Live_8_-_edinburgh_50000_-_the_final_push_rjl.jpg/640px-Live_8_-_edinburgh_50000_-_the_final_push_rjl.jpg" },
];

const CategoriesPage = () => {
  return (
    <div className="categoriespage">
      <div className="container-grid">
        {categories.map((category) => (
            <Link key={category.name} to={`/categories/${category.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <CategoryCard
                    title={category.name}
                    imageUrl={category.imageUrl}
                />
            </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;