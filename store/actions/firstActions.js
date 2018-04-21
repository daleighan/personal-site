export const increaseProp = args => dispatch => {
  return dispatch({type: 'INCREASE_FIRST', args});
};

export const decreaseProp = args => dispatch => {
  return dispatch({type: 'DECREASE_FIRST', args});
};
