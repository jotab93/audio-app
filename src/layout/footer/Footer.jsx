import { AppBar, Box, Toolbar } from "@mui/material";
import "./Footer.css";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="footerContainer" position="relative">
        <Toolbar className="footerContainer.bar">
          <img
            src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637939/audiophileEcommerce/shared/desktop/logo_qnvapf.svg"
            alt="title"
            className="footerContainer.bar.name"
          />
        </Toolbar>
        <>
          <div className="footerContainer.descriptionIcons">
            <p className="footerContainer.description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
              nostrum accusamus recusandae atque quis quo enim ipsa aliquam
              dolore. Vel accusamus minus quod aspernatur, eveniet blanditiis
              fuga repudiandae reprehenderit voluptatum.
            </p>
            <section className="footerContainer.icons">
              <Link
                to="https://www.facebook.com/"
                className="footerContainer.social"
              >
                <FacebookIcon />
              </Link>
              <Link
                to="https://www.twitter.com/"
                className="footerContainer.social"
              >
                <TwitterIcon />
              </Link>
              <Link
                to="https://www.instagram.com/"
                className="footerContainer.social"
              >
                <InstagramIcon />
              </Link>
            </section>
          </div>
        </>
      </AppBar>
    </Box>
  );
};

export default Footer;
