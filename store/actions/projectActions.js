import axios from 'axios';

export const initialFetch = () => dispatch => {
  axios
    .get('https://bwuz5to7ch.execute-api.us-east-2.amazonaws.com/dev/projects')
    .then(response => {
      return dispatch({type: 'FETCH_PROJECTS', payload: response.data.Items});
    })
    .catch(err => console.log(err));
};

