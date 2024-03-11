const initialState = { dj: [] };

const savingAPI = (state = initialState, action) => {
  switch (action.type) {
    case "savingAPI":
      return { ...state, dj : [...state.dj, action.data] };
    default:
      return state;
  }
};
export default savingAPI;