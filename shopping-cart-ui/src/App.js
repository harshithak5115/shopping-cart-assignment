import "./App.css";
import HomePage from "./Pages/Homepage/Homepage.component";
import CategoryPage from "./Pages/Categories/categories.component";
import Header from "./Components/Header/Header.component";
import ProductListingPage from "./Pages/Products/products.component";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login/login.component";
import Register from "./Components/Register/register.component";
import ProductCategory from "./Components/product-category/product-category.component";
import Cart from "./Pages/Cart/Cart.component";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Header />}>
            <Route exact index element={<HomePage />} />
            <Route exact path="products" element={<ProductCategory />} />
            <Route exact path="login" element={<Login />} />
            <Route exact path="register" element={<Register />} />
            <Route exact path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
