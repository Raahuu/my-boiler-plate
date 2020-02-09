const initialState = {
  fetching: false,
  data: 0,
  error: null
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEST":
      return { ...state, fetching: true, error: null };
    case "TEST_SUCCESS":
      return {
        ...state,
        fetching: false,
        data: state.data + action.payload,
        error: null
      };
    case "TEST_FAILURE":
      return { ...state, fetching: false, data: [], error: action.error };

    default:
      return state;
  }
};
export default reducer;
