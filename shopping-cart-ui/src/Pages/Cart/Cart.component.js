import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
} from "../../Components/Store/Actions/CartActions";
import { Link } from "react-router-dom";

import "../Cart/Cart.component.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.CartReducer.cartItems);
  const dispatch = useDispatch();
  return (
    <>
      <div className="Cart">
        {console.log(cartItems, "cartItems")}
        <div className="cartheading">My Cart</div>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <div className="cartItem" key={item.id}>
                <img
                  src={item.imageURL}
                  className="productImage"
                  alt={item.name}
                />
                <div className="cartcontainer">
                  <p className="productname">{item.name}</p>
                  <button
                    className="cartaction"
                    onClick={() => dispatch(addItem(item))}
                  >
                    +
                  </button>
                  {item.quantity}
                  <button
                    className="cartaction"
                    onClick={() => dispatch(removeItem(item))}
                  >
                    -
                  </button>{" "}
                  X {item.price}
                </div>
                <div className="productprice">{`Rs.${
                  item.quantity * item.price
                }`}</div>
              </div>
            ))}
          </>
        ) : (
          <>Cart is empty</>
        )}

        <button>
          <Link to="/">Checkout</Link>
        </button>
      </div>
    </>
  );
};

export default Cart;
