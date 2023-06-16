import { Routes, Route } from "react-router-dom";
import { menuRoutes } from "./menuRoutes";

const AppRouter = () => {
  return (
    <Routes>
      {menuRoutes.map(({ id, path, Element }) => (
        <Route key={id} path={path} element={<Element />} />
      ))}

      <Route path="*" element={<h1>No existe</h1>} />
    </Routes>
  );
};

export default AppRouter;
