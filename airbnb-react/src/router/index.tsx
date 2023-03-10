import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";

const Home = lazy(() => import("@/views/Home"));
const Entire = lazy(() => import("@/views/Entire"));
const Detail = lazy(() => import("@/views/Detail"));

const routes: RouteObject[] = [
  { path: "/", element: <Navigate to="/home" /> },
  { path: "/home", element: <Home /> },
  { path: "/entire", element: <Entire /> },
  { path: "/detail", element: <Detail /> },
];

export default routes;
