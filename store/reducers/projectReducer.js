const initialState = {
  projects: [],
  currentProject: null,
  projectsFetched: false,
  modalOpen: false,
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
    case 'SET_PROJECT':
      return {
        ...state,
        currentProject: action.payload,
      };
    case 'TOGGLE_MODAL':
      return {
        ...state,
        modalOpen: !state.modalOpen,
      };
    default:
      return state;
  }
};

export default projectReducer;
