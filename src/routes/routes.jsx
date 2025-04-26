import ErrorPage from "../components/error/ErrorPage";
import Layout from "../layouts/Layout";
import HomePage from "../pages/home/HomePage";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ path: "", element: <HomePage /> }],
  },
];
