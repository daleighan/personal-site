import axios from 'axios';

export const initialFetch = () => dispatch => {
  axios
    .get('https://bwuz5to7ch.execute-api.us-east-2.amazonaws.com/dev/projects')
    .then(response => {
      return dispatch({type: 'FETCH_PROJECTS', payload: response.data.Items});
    })
    .catch(err => console.log(err));
};

export const fetchProject = (project) => dispatch => { 
  axios
    .get('https://bwuz5to7ch.execute-api.us-east-2.amazonaws.com/dev/projects')
    .then(response => {
      const currentProject = response.data.Items.filter(item => project === item.projectName);
      console.log(currentProject, 'currentProject');
      return dispatch({type: 'FETCH_SINGLE_PROJECT', payload: response.data.Items});
    })
    .catch(err => console.log(err));
};
