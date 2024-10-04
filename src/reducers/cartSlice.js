import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  items: [],
};

const saveCartToStorage = async (cartItems) => {
  console.log("saving to cart storage");
  try {
    await AsyncStorage.setItem("cart", JSON.stringify(cartItems));
  } catch (e) {
    console.error("Failed to save cart to storage", e);
  }
};

const loadCartFromStorage = async () => {
  try {
    const storedCart = await AsyncStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (e) {
    console.error("Failed to load cart from storage", e);
    return [];
  }
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadCart: (state, action) => {
      state.items = action.payload;
    },
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        // Update quantity and recalculate total price
        existingProduct.quantity += product.quantity;
        existingProduct.price =
          existingProduct.unitPrice * existingProduct.quantity;
      } else {
        // Add new product with a unitPrice and initial quantity
        state.items.push({
          ...product,
          unitPrice: product.price, // Store the unit price separately
          price: product.price * (product.quantity || 1), // Calculate initial total price
          quantity: product.quantity || 1,
        });
      }
      saveCartToStorage(state.items);
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.items.find((item) => item.id === productId);

      if (product) {
        product.quantity += 1;
        product.price = product.unitPrice * product.quantity; // Recalculate price based on new quantity
        saveCartToStorage(state.items);
      }
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.items.find((item) => item.id === productId);

      if (product && product.quantity > 1) {
        product.quantity -= 1;
        product.price = product.unitPrice * product.quantity; // Recalculate price based on new quantity
        saveCartToStorage(state.items);
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveCartToStorage(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveCartToStorage([]);
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  loadCart,
  clearCart,
} = cartSlice.actions;

export const initializeCart = () => async (dispatch) => {
  const cart = await loadCartFromStorage();
  dispatch(loadCart(cart));
};

export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
