import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { menu } from "../../routes/navigation";
import DrawerContainer from "./DrawerContainer";
import CustomModalContainer from "../../components/common/customModal/CustomModalContainer";

const Navbar = ({ size, navigate, handleOpen, handleClose, open }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className={"navBarContainer"}
        sx={{
          backgroundColor: "primary.main",
        }}
        position="static"
      >
        <Toolbar className={"bar"}>
          {size < 900 ? (
            <>
              <DrawerContainer />
              <img
                src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637939/audiophileEcommerce/shared/desktop/logo_qnvapf.svg"
                alt="title"
                className={"name"}
                onClick={() => navigate("/")}
              />
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              <IconButton className={"menu"}>
                <MenuIcon />
              </IconButton>
              <img
                src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637939/audiophileEcommerce/shared/desktop/logo_qnvapf.svg"
                alt="title"
                className={"name"}
                onClick={() => navigate("/")}
              />
            </Box>
          )}

          <Box className={"items"}>
            {menu.map((item) => {
              return (
                <Link
                  key={item.id}
                  sx={{ flexGrow: 1 }}
                  className={"item"}
                  to={item.path}
                >
                  {item.title}
                </Link>
              );
            })}
          </Box>
          <Box className={"usersContainer"}>
            <Box className={"loginBox"}>
              <Link to="/register" className={"linkSign"}>
                {" "}
                Register{" "}
              </Link>
              <hr />
              <Link to="/login" className={"linkSign"}>
                Log In
              </Link>
            </Box>
            <IconButton
              className={"cartIcon"}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ padding: "0" }}
              onClick={handleOpen}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: "1.5rem" }} />
            </IconButton>
            {/* ACA EL MODAL  */}
            <CustomModalContainer open={open} handleClose={handleClose} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
