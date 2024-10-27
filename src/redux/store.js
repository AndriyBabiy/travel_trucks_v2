import { compose, applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./productsSlice";
import { filterReducer } from "./filterSlice";
import { favoritesReducer } from "./favoritesSlice";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
  reducer: {
    products: productsReducer,
    favorites: favoritesReducer,
    filter: filterReducer,
  },
  // composeEnhancers(applyMiddleware()),
});
