import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  concerts: [],
  theaters: [],
  festivals: [],
  standups: [],
  searchTerm: "",
  searhedItems: [],
  tickets: [],
  
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
      const existingTicket = state.tickets.find(
        (ticket) => ticket.id === action.payload.id
      );
      if (existingTicket) {
        if (existingTicket.seat.includes(action.payload.seat)) {
          return;
        }
        const updatedSeat = `${existingTicket.seat}-${action.payload.seat}`;
        const updatedPrice = existingTicket.price + action.payload.price;
        state.tickets = state.tickets.map((ticket) =>
          ticket.id === action.payload.id
            ? {
                ...action.payload,
                seat: updatedSeat,
                price: updatedPrice,
              }
            : ticket
        );
      } else {
        state.tickets = [...state.tickets, action.payload];
      }
    },

    deleteTicket: (state, action) => {
      const selectedTicket = state.tickets.filter(
        (x) => x.id !== action.payload.id
      );
      state.tickets = selectedTicket;
    },
    emptyBasket: (state, action) => {
      state.tickets = [];
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
  deleteTicket,
  emptyBasket,
} = dataSlice.actions;
export default dataSlice.reducer;
