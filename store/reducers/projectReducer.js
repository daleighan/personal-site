const initialState = {
  projects: [],
  currentProject: null,
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
    case 'FETCH_SINGLE_PROJECT':
      return {
        ...state
      }
    default:
      return state;
  }
};

export default projectReducer;
