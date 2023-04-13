import { configureStore } from "@reduxjs/toolkit";
// Reducers
import booksReducer from "./slices/books.slice";

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
