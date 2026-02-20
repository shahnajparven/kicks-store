import { configureStore } from "@reduxjs/toolkit";
import {categoriesReducer, productDetailsReducer, productsReducer} from "./reducers/productReducer";

const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    productDetails: productDetailsReducer,
  },
});

export default store;
