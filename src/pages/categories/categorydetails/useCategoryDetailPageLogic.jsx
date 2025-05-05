import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchItemsByField,fetchItemsByCategory } from "../../../store/items/itemsSlice";

export const useCategoryDetailPageLogic = () => {
  const dispatch = useDispatch();
  const { category: rawCategory } = useParams();
  const categoryMap = {
      "virtual-activities": "activitats-virtuals",
      "routes-and-visits": "rutes-i-visites",
      "dance": "dansa",
      "concerts": "concerts",
      "theater": "teatre",
      "exhibitions": "exposicions",
      "conferences": "conferencies",
      "children": "infantil",
      "festivals-and-showcases": "festivals-i-mostres",
  };
  const category = categoryMap[rawCategory] || rawCategory;
  console.log("category",category);
  const data = useSelector((state) => state.items.data);
  const status = useSelector((state) => state.items.status);
  const error = useSelector((state) => state.items.error);

  const loadCategoryItems = () => {
    dispatch(fetchItemsByCategory([category])); 
  };

  const loadItemsByField= (categories) => {
    console.log("dispatch",categories,category);
    dispatch(fetchItemsByField({ categories, category }));
  };

  const handleFilterChange = (filters) => {
    const { categories } = filters;
    if (categories.length > 0) {
      console.log("por filtro");
      loadItemsByField(categories);
    } else {
      console.log("hola");
      loadCategoryItems();
    }
  };

  useEffect(() => {
    console.log("Data updated:", data);
  }, [data]);

  return {
    category,
    data,
    status,
    error,
    handleFilterChange,
    loadItemsByField,
    loadCategoryItems,
  };
};