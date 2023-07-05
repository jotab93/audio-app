import { Outlet } from "react-router-dom";
import FooterContainer from "./footer/FooterContainer";
import NavbarContainer from "./navbar/NavbarContainer";

const Layout = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div>
        <NavbarContainer />
      </div>
      <div style={{ minHeight: "calc(100vh - 270px)" }}>
        <Outlet />
      </div>

      <div style={{ minHeight: "100px", position: "relative" }}>
        <FooterContainer />
      </div>
    </div>
  );
};

export default Layout;
