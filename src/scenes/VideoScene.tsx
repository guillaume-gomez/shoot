import { useEffect, useRef } from "react";
import SoundButton from "../components/SoundButton";

const videosUrl =[
  "/108070-680697398_medium.mp4",
  "/20063221-uhd_3840_2160_24fps.mp4",
  "/4990250-hd_1920_1080_30fps.mp4",
  "/7609195-uhd_3840_2160_25fps.mp4",
]

function VideoScene() {
  const currentIndex =  useRef<number>(0);
  const videoRef = useRef<HTMLMediaElement>();

  useEffect(() => {
    function keyPressed() {

      loadVideo(videosUrl[currentIndex.current]);
      
      handlePlayButton();
    }
    document.addEventListener('keydown', keyPressed, true);
    

    return () => {
        document.removeEventListener('keydown', keyPressed);
        document.removeEventListener("loadedmetadata", onLoadVideo)
    };

  }, []);

  useEffect(() => {
    if(videoRef.current) {

     videoRef.current.loadedmetadata = onLoadVideo;
     loadVideo(videosUrl[currentIndex.current]);

     currentIndex.current += 1;
    }
  },[videoRef.current]);

  function onLoadVideo(event: any) {
    console.log(event)
  }

  function loadVideo(path: string) {
    if(!videoRef.current) {
      return;
    }

    videoRef.current.src = path;
    videoRef.current.load()
  }

  async function playVideo() {
    try {
      if(!videoRef.current.duration) {
        return;
      }

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
        preload="none"
       // src="/108070-680697398_medium.mp4"
        type="video/mp4"
        className="absolute w-full h-screen min-w-full min-h-full"
        style={{width: "auto", height: "auto"}}
        controls
      >
      </video>
    </div>
  );

}

export default VideoScene;