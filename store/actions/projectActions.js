import axios from 'axios';

export const initialFetch = () => dispatch => {
  axios
    .get('https://bwuz5to7ch.execute-api.us-east-2.amazonaws.com/dev/projects')
    .then(response => {
      return dispatch({type: 'FETCH_PROJECTS', payload: response.data.Items});
    })
    .catch(err => console.log(err));
};

export const fetchProject = project => dispatch => {
  axios
    .get('https://bwuz5to7ch.execute-api.us-east-2.amazonaws.com/dev/projects')
    .then(response => {
      const {Items} = response.data;
      const currentProject = Items.filter(item => project === item.projectName);
      return dispatch({
        type: 'FETCH_SINGLE_PROJECT',
        payload: {Items, currentProject},
      });
    })
    .catch(err => console.log(err));
};

export const setProject = (project, nav) => dispatch => {
  dispatch({type: 'SET_PROJECT', payload: project});
  nav.history.push(`/${project.projectName}`);
};

export const toggleModal = () => dispatch => {
  dispatch({type: 'TOGGLE_MODAL'});
};
