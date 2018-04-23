const initialState = {
  projects: [],
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PROJECTS':
      return {
        ...state,
        projects: action.payload,
      };
    default:
      return state;
  }
};

export default projectReducer;
