import { axiosProducts } from "./axiosInstance";

export const getAllProducts = async () => {
  let data = axiosProducts.get("/");
  let res = await data;
  return res.data;
};

//getById

export const getProductById = async (id) => {
  let data = axiosProducts.get(`/${id}`);
  let res = await data;
  return res.data;
};
