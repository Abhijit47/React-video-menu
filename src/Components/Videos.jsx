import React from 'react';

const Videos = ({ videoSrc }) => {
  return (
    <div className='hstack justify-content-center'>
      <video
        loop
        controls
        autostart="true"
        autoPlay
        muted
        src={videoSrc}
        width="533em"
        height="300em"
        className="row col-12 col-lg-12 gy-0 gx-0 rounded-bottom-2"></video>
    </div>
  );
};

export default Videos;