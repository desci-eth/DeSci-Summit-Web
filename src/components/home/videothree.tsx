import React, { useState } from 'react';
import Event from "../../assets/jpg/event3.jpg"
import Play from "../../assets/svg/play.svg"



const VideoThree = () => {
  const [play, setPlay] = useState(false);
  const videoUrl = 'https://www.youtube.com/embed/KSf7N1tDXr4?si=b6z17fD9JdbOhY-f'; // Your video URL


  const handlePlay = () => {
    setPlay(true);
  };

  return (
    <div className="video-player relative" >
       {!play && (
        <>
          <img
            src={Event}
            alt="Video Thumbnail"
            className='w-full h-[250px] md:h-[220px] lg:h-[300px] xl:h-[400px] 2xl:h-[500px] rounded-[5px]'
          />
          <img
            src={Play}
            alt="Play Button"
            onClick={handlePlay}
            className="absolute inset-0 m-auto cursor-pointer"
          />
        </>
      )}
      {play && (
        <iframe
          width="100%"
          height="423px"
          src={`${videoUrl}?autoplay=1`} // Ensure this URL is correct and supports query parameters for autoplay
          allow="autoplay"
          allowFullScreen
          title="Video Player"
          className='w-full h-[250px] md:h-[220px] lg:h-[300px] xl:h-[400px] 2xl:h-[500px] rounded-[5px]'

        ></iframe>
      )}
    </div>
  );
};

export default VideoThree;
