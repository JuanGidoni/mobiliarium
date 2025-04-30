import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  fetchItems,
  fetchItemById,
  fetchItemsByCategory,
  clearItems,
} from "../../store/items/itemsSlice";

export const useHomePageLogic = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.items.data);
  const status = useSelector((state) => state.items.status);
  const error = useSelector((state) => state.items.error);

  const [filteredMuseums, setFilteredMuseums] = useState([]);

  useEffect(() => {
    setFilteredMuseums(data);
  }, [data]);

  // Load all items
  const loadItems = () => {
    dispatch(fetchItems());
  };

  // Load item by ID
  const loadItemById = (id) => {
    dispatch(fetchItemById(id));
  };

  // Load by category (single or array)
  const loadItemsByCategory = (categories) => {
    dispatch(fetchItemsByCategory(categories));
  };

  // Clear items
  const clear = () => {
    dispatch(clearItems());
  };

  // Handle filter change
  const handleFilterChange = (filters) => {
    const { categories } = filters;
    if (categories.length > 0) {
      loadItemsByCategory(categories);
    } else {
      loadItems();
    }
  };

  // Handle search
  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const newFilteredMuseums = data.filter(
      (museum) =>
        museum.denominaci.toLowerCase().includes(lowercasedQuery) ||
        museum.descripcio.toLowerCase().includes(lowercasedQuery) ||
        museum.tags_categor_es.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredMuseums(newFilteredMuseums);
  };

  return {
    data,
    status,
    error,
    loadItems,
    loadItemById,
    loadItemsByCategory,
    clear,
    filteredMuseums,
    handleFilterChange,
    handleSearch,
  };
};
