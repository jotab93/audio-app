import axios from "axios";

// productos instance
export const axiosProducts = axios.create({
  baseURL: "http://localhost:5000/products",
});

// auth instance
