import { AppBar, Box, Toolbar } from "@mui/material";
import styles from "./Footer.css";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { menuRoutes } from "../../routes/menuRoutes";

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={styles.footerContainer} position="relative">
        <Toolbar className={styles.bar}>
          <img
            src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637939/audiophileEcommerce/shared/desktop/logo_qnvapf.svg"
            alt="title"
            className={styles.name}
          />
          <div className={styles.items}>
            {menuRoutes.map((item) => {
              return (
                <Link
                  key={item.id}
                  sx={{ flexGrow: 1 }}
                  className={styles.item}
                  to={item.path}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </Toolbar>
        <>
          <div className={styles.descriptionIcons}>
            <p className={styles.description}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
              nostrum accusamus recusandae atque quis quo enim ipsa aliquam
              dolore. Vel accusamus minus quod aspernatur, eveniet blanditiis
              fuga repudiandae reprehenderit voluptatum.
            </p>
            <section className={styles.icons}>
              <Link to="https://www.facebook.com/" className={styles.social}>
                <FacebookIcon />
              </Link>
              <Link to="https://www.twitter.com/" className={styles.social}>
                <TwitterIcon />
              </Link>
              <Link to="https://www.instagram.com/" className={styles.social}>
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
