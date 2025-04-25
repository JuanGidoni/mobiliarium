import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes.jsx";

const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL,
});

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
