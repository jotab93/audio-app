import { Box } from "@mui/material";
import CardContainer from "../../common/card/CardContainer";
// Otros imports necesarios

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      Home
      <CardContainer />
    </Box>
  );
};

export default Home;
