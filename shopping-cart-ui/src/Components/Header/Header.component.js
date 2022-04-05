import * as React from "react";

// importing material UI components
import { Link, Outlet } from "react-router-dom";
import "../Header/Header.component.css";
import Footer from "../Footer/Footer.component";
import Cart from "../../Pages/Cart/Cart.component";

const Header = () => {
  const [showCart, setShowCart] = React.useState(false);
  const onClickHandler = () => {
    console.log(" I am onclcik handler called");
    setShowCart(!showCart);
  };
  return (
    <>
      {showCart && <Cart />}
      <div className="m-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a href="/" className="navbar-brand">
              <img
                className="logo"
                src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/shopping-online.jpg"
                alt="logo"
              />
            </a>
            {/* <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav">
                <Link to="/" className="nav-item nav-link active">
                  Home
                </Link>
                <Link to="/products" className="nav-item nav-link">
                  Products
                </Link>
              </div>
              <div className="navbar-nav ms-auto">
                <Link to="/login" className="nav-item nav-link">
                  Login
                </Link>
                <Link to="/register" className="nav-item nav-link">
                  Register
                </Link>
                <button className="" onClick={onClickHandler}>
                  Cart
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
