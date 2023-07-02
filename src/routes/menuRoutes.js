import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import HomeContainer from "../components/pages/home/HomeContainer";
import LoginContainer from "../components/login/LoginContainer";
import ProductDetailContainer from "../components/pages/productDetail/ProductDetailContainer";
import RegisterContainer from "../components/pages/register/RegisterContainer";
import ProductsListContainer from "../components/productsList/ProductsListContainer";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: HomeContainer,
  },
  {
    id: "products",
    path: "/category/:categoryName",
    Element: ProductsListContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
  {
    id: "login",
    path: "/login",
    Element: LoginContainer,
  },
  {
    id: "productDetail",
    path: "/productDetail/:id",
    Element: ProductDetailContainer,
  },
  {
    id: "register",
    path: "/register",
    Element: RegisterContainer,
  },
];
