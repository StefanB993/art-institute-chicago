import { configureStore } from "@reduxjs/toolkit";
import artworksReducer from "./features/Artworks/artworksSlice";
import filterReducer from "./components/Filter/filterSlice";

const store = configureStore({
  reducer: {
    artworks: artworksReducer,
    filter: filterReducer,
  },
});

export default store;
