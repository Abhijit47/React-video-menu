import React from 'react';

const Menu = ({ handleVideoSrc, videoNames }) => {
  return (
    <>
      <hr />
      <h5 className='text-center'>Provide your choice:</h5>
      <form
        onClick={(e) => handleVideoSrc(e.target.value)}
        className="form-group hstack justify-content-center gap-2"
      >
        {videoNames.map((video, index) => {
          return (
            <div key={index} className="hstack gap-2 justify-content-center" >
              <label htmlFor={video} className="text-capitalize">{video}</label>
              <input type="radio" className='form-check-input' name={video} id={video} value={video} />
            </div>

          );
        })}
      </form>
      <hr />
    </>
  );
};

export default Menu;