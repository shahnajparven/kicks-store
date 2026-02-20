// import { createStore, combineReducers, applyMiddleware } from "redux";
// import {thunk} from "redux-thunk";
// // import { composeWithDevTools } from "redux-devtools-extension";
// import { composeWithDevTools } from "@redux-devtools/extension";

// import { productsReducer } from "./reducers/productReducer";

// const reducer = combineReducers({
//   products: productsReducer,
// });

// // ✅ You don't need initialState unless preloading data
// const middleware = [thunk];

// const store = createStore(
//   reducer,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import {productsReducer} from "./reducers/productReducer";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
