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
        <Toolbar className="bar">
          <img
            src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637939/audiophileEcommerce/shared/desktop/logo_qnvapf.svg"
            alt="title"
            className="footerContainer.bar.name"
          />
        </Toolbar>
        <>
          <div className="descriptionIcons">
            <p className="description">
              Audiophile is an all in one stop to fulfill your audio needs.
              We are a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we are open 7 days a week.
            </p>

            <section className="icons">
              <Link to="https://www.facebook.com/" className="social">
                <FacebookIcon />
              </Link>
              <Link to="https://www.twitter.com/" className="social">
                <TwitterIcon />
              </Link>
              <Link to="https://www.instagram.com/" className="social">
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
