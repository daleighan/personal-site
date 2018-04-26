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
      console.log(action.payload);
      const nextProject =
        action.payload.currentProject.length > 0
          ? action.payload.currentProject[0]
          : null;
      return {
        ...state,
        projectsFetched: true,
        projects: action.payload.Items,
        currentProject: nextProject,
      };
    default:
      return state;
  }
};

export default projectReducer;
