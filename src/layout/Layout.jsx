import { Outlet } from "react-router-dom";
import FooterContainer from "./footer/FooterContainer";
import NavbarContainer from "./navbar/NavbarContainer";

const Layout = () => {
  return (
    <div>
      <div style={{ height: "60px" }}>
        <NavbarContainer />
      </div>

      <div style={{ minHeight: "calc(100vh - 260px)" }}>
        <Outlet />
      </div>

      <div style={{ height: "200px" }}>
        <FooterContainer />
      </div>
    </div>
  );
};

export default Layout;
