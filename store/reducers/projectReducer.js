const initialState = {
  projects: [],
  projectsFetched: false,
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PROJECTS':
      return {
        ...state,
        projectsFetched: true,
        projects: action.payload,
      };
    default:
      return state;
  }
};

export default projectReducer;
