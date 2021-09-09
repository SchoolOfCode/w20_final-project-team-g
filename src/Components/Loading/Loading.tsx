import React from 'react';
import loadingWoman from './loadingZen.gif';
const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src={loadingWoman} alt="loading..." />
    </div>
  );
};

export default Loading;
