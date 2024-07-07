import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: JSON.parse(localStorage.getItem("cart"))
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
    products: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    loadProducts: (state, action) => {
      state.products = action.payload;
    },

    addToCart: (state, action) => {
      const cartItem = state.cart.find((item) => item.id == action.payload.id);

      if (cartItem) {
        cartItem.quantity += 1;
        return;
      }

      state.cart.push({
        quantity: 1,
        ...action.payload,
      });

      localStorage.setItem("cart", JSON.stringify(current(state.cart)));
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);

      localStorage.removeItem("car")
    },

    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },

    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity > 0 && item.quantity - 1 };
        }
        return item;
      });
    },

    getCartTotal: (state) => {
      let { totalQuantity, totalAmount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.totalAmount += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQuantity: 0,
        }
      );
      state.totalAmount = parseInt(totalAmount.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
  },
});

export const {
  loadProducts,
  addToCart,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  getCartTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
