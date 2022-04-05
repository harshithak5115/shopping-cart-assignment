import { addItemToCart, removeItemFromCart } from "../Utils";
const INITIAL_STATE = {
  cartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "additem":
      console.log("adding item");
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case "removeItem":
      console.log("removing item");
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default CartReducer;
