export const allData = (state) => {
  return [
    ...state.data.concerts,
    ...state.data.theaters,
    ...state.data.festivals,
    ...state.data.standups,
  ];
};
