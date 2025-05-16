import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  try {
    const cart = localStorage.getItem("cart");

    if (!cart || cart === "undefined") {
      return [];
    }

    return JSON.parse(cart);
  } catch (error) {
    console.error("🚨 Hatalı JSON formatı:", error);
    localStorage.removeItem("cart");
    return [];
  }
};

const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState = {
  cart: fetchFromLocalStorage(),
  itemCount: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemCart = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (isItemCart) {
        const tempCart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            let tempQty = item.quantity + action.payload.quantity;
            let tempTotalPrice = tempQty * item.price;
            return {
              ...item,
              quantity: tempQty,
              totalPrice: tempTotalPrice,
            };
          } else {
            return item;
          }
        });
        state.cart = tempCart;
        storeInLocalStorage(state.cart);
      } else {
        state.cart.push(action.payload);
        storeInLocalStorage(state.cart);
      }
    },
    removeFromCart: (state, action) => {
      const tempCart = state.cart.filter((item) => item.id !== action.payload);
      state.cart = tempCart;
      storeInLocalStorage(state.cart);
    },
    clearCart: (state) => {
      state.cart = [];
      storeInLocalStorage(state.cart);
    },
    getCartTotal: (state) => {
      state.totalAmount = state.cart.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.price * cartItem.quantity);
      }, 0);
      state.itemCount = state.cart.length;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, getCartTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
