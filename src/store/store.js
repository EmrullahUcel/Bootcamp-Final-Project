import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "/src/features/DataSlice.jsx";

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
