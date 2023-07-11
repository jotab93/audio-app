import { Box, Button } from "@mui/material";
import image1 from "../../../assets/home/desktop/image-hero.jpg";
import { Link } from "react-router-dom";

const Home = (product) => {
  return (
    <div style={{ position: "relative" }}>
      <Box>
        <img
          src={image1}
          alt=""
          style={{ width: "100%", maxHeight: "100rem" }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "10%",
            transform: "translateY(-50%)",
          }}
        >
          <h1
            style={{
              color: "white",
            }}
          >
            SITE IN DEVELOPMENT
          </h1>
          <h3
            style={{
              color: "white",
            }}
          >
            Please come back later
          </h3>
        </div>
      </Box>
    </div>
  );
};

export default Home;
