import { useEffect, useRef } from "react";
import SoundButton from "../components/SoundButton";

function VideoScene() {
  const videoRef = useRef<HTMLMediaElement>();

  useEffect(() => {
    function keyPressed() {
      handlePlayButton();
    }
    document.addEventListener('keydown', keyPressed, true);

    return () => {
        document.removeEventListener('keydown', keyPressed);
    };

}, []);

  async function playVideo() {
    try {
      await videoRef.current.play();
    } catch (err) {
      console.log("Error cannot play video")
    }
  }

  function handlePlayButton() {
    if (videoRef.current.paused) {
      playVideo();
    } else {
      videoRef.current.pause();
    }
  }
  

	return (
    <div 
      className="h-screen"
      style={{border: "2px solid blue", zIndex: 2}}
    >
      <div className="absolute top-2.5 right-2.5">
        <SoundButton />
      </div>

      <p className="absolute top-2/4 text-center w-full text-5xl" style={{zIndex: 2}}><b>Shoot</b></p>
      <video 
        ref={videoRef}
        autoPlay
        className="absolute w-full h-screen min-w-full min-h-full"
        controls
        style={{width: "auto", height: "auto"}}
      >
        <source src="/108070-680697398_medium.mp4" type="video/mp4" />
      </video>
    </div>
  );

}

export default VideoScene;