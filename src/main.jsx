import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Proyectos from "./components/Proyectos/Proyectos.jsx";
import ProyectoDetalles from "./Detalles/ProyectoDetalles.jsx";
import Perfil from "./components/Perfil/Perfil.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/perfil",
    element: <Perfil />,
  },
  {
    path: "/proyectos",
    element: <Proyectos />,
  },
  {
    path: "/proyecto/:id",
    element: <ProyectoDetalles />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
