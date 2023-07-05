import { useParams } from "react-router-dom";
import Home from "./Home";
import { useEffect, useState } from "react";
import { getProductById } from "../../../services/productServices";

const HomeContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  console.log(product);

  useEffect(() => {
    const getData = async () => {
      let data = await getProductById(id);
      setProduct(data);
    };
    getData();
  }, [id]);
  
  return (
    <div>
      <Home product={product} />
    </div>
  );
};

export default HomeContainer;
