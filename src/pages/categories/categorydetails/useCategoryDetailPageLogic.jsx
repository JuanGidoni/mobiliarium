import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchItemsByCategory, clearItems } from "../../../store/items/itemsSlice";

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

  useEffect(() => {
    return () => {
      dispatch(clearItems());
    };
  }, [dispatch]);

  return {
    category,
    data,
    status,
    error,
    loadCategoryItems,
  };
};