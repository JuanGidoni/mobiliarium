import { useDispatch, useSelector } from "react-redux";
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

  return {
    data,
    status,
    error,
    loadItems,
    loadItemById,
    loadItemsByCategory,
    clear,
  };
};
