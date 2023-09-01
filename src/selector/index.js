export const getRandomEvents = (state) => {
  return [
    ...state.data.concerts.slice(0, 10),
    ...state.data.theaters.slice(0, 10),
    ...state.data.festivals.slice(0, 10),
    ...state.data.standups.slice(0, 10),
  ];
};
