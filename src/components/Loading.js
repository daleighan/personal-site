import React from 'react';
import {RingLoader} from 'react-spinners';

const Loading = ({projectsFetched}) => (
  <div className="loading">
    <div className="loading-vertical">
      <RingLoader color={'#f7f9fb'} loading={!projectsFetched} />
    </div>
  </div>
);

export default Loading;
