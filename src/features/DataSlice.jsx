import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  concerts: [],
  theaters: [],
  festivals: [],
  standups: [],
  searchTerm: "",
  searhedItems: [],
  allData: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setConcerts: (state, action) => {
      state.concerts = action.payload;
    },
    setTheaters: (state, action) => {
      state.theaters = action.payload;
    },
    setFestivals: (state, action) => {
      state.festivals = action.payload;
    },
    setStandups: (state, action) => {
      state.standups = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSearhedItems: (state, action) => {
      state.searhedItems = action.payload;
    },
    setAllData: (state, action) => {
      state.allData = action.payload;
    },
  },
});

export const {
  setConcerts,
  setFestivals,
  setStandups,
  setTheaters,
  setSearchTerm,
  setSearhedItems,
  setAllData,
} = dataSlice.actions;
export default dataSlice.reducer;
