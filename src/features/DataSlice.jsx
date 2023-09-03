import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  concerts: [],
  theaters: [],
  festivals: [],
  standups: [],
  searchTerm: "",
  searhedItems: [],
  ticket: [],
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
    setTicket: (state, action) => {
      state.ticket = [...state.ticket, action.payload];
      console.log(state.ticket);
    },
    deleteTicket: (state, action) => {
      const selectedTicket = state.ticket.filter(
        (x) => x.id !== action.payload.id
      );
      state.ticket = selectedTicket;
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
  setTicket,
  deleteTicket
} = dataSlice.actions;
export default dataSlice.reducer;
