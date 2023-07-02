import { useState, useEffect } from "react";
import ProductsList from "./ProductsList";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductsListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();
  console.log(products);

  useEffect(() => {
    const getData = async () => {
      let data = axios.get("http://localhost:5000/products");
      let res = await data;
      let productsByCategory = res.data.filter(
        (prod) => prod.category === categoryName
      );
      setProducts(productsByCategory);
    };
    getData();
  }, [categoryName]);

  return <ProductsList products={products} />;
};

export default ProductsListContainer;
