import { Routes, Route } from "react-router-dom";
import { menuRoutes } from "./menuRoutes";
import Layout from "../layout/Layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {menuRoutes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>

      <Route path="*" element={<h1>No existe</h1>} />
    </Routes>
  );
};

export default AppRouter;
