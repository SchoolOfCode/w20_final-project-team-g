import React from 'react';
import loadingWoman from './loadingZen.gif';
import spinner from './spinner2.gif';
const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
      }}
    >
      <img src={spinner} alt="loading..." />
    </div>
  );
};

export default Loading;
