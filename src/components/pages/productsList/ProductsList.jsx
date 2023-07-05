import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProductsList = ({ products, categoryName }) => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "120px",
          backgroundColor: "secondary.main",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography color="white">{categoryName.toUpperCase()}</Typography>
      </Box>

      {products.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <Link to={`/productDetail/${product.id} `}>
              <Button
                sx={{
                  width: "160px",
                  padding: "10px",
                }}
                variant="contained"
              >
                SEE PRODUCT
              </Button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
