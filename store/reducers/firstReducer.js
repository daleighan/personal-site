const initialState = {
  firstProp: 0,
};

const firstReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_FIRST':
      return {
        ...state,
        firstProp: state.firstProp + 1,
      };
    case 'DECREASE_FIRST':
      return {
        ...state,
        firstProp: state.firstProp - 1,
      };
    default:
      return state;
  }
};

export default firstReducer;
