import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Videos from './Components/Videos';
import Menu from './Components/Menu';

const videos = {
  deer:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
};
// Getting out the video name using loop
const videoNames = Object.keys(videos);

const App = () => {
  const [videoSrc, setVideoSrc] = useState(videos.deer);

  const handleVideoSrc = (video) => {
    const videoSrc = videos[video];
    setVideoSrc(videoSrc);
  };

  const styleBg = {
    backgroundColor: "#fd7e14"
  };

  return (
    <div className='bg-gradient rounded-3 shadow-sm' style={styleBg}>
      <h1 className='text-center fs-2'>Video player</h1>
      <Menu handleVideoSrc={handleVideoSrc} videoNames={videoNames} />
      <Videos videoSrc={videoSrc} />
    </div>
  );
};

export default App;