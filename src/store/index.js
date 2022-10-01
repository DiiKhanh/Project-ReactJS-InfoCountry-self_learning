import { configureStore } from "@reduxjs/toolkit";
import CountriesReducer from "./CountriesSlice/CountriesSlice";


const store = configureStore({
  reducer: {
    Countries: CountriesReducer,
  },
});

export default store;
