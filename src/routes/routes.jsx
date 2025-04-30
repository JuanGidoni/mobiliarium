import ErrorPage from "../components/error/ErrorPage";
import Layout from "../layouts/Layout";
import HomePage from "../pages/home/HomePage";
import CategoriesPage from "../pages/categories/CategoriesPage";
//import CategoryDetailPage from "../pages/categories//categorydetails/CategoryDetailPage";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ path: "", element: <HomePage /> }],
  },
  {
    path: "/categories",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <CategoriesPage /> },
    ],
  },
  /*
  {
    path: "/categories/:category",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <CategoryDetailPage /> }, 
    ],
  }*/
];
