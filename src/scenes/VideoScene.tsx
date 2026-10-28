import { useEffect, useRef, useMemo, useContext } from "react";
import SoundButton from "../components/SoundButton";
import { SoundContext } from "../contexts/SoundContextWrapper";

const videosUrl =[
  "/108070-680697398_medium.mp4",
  "/20063221-uhd_3840_2160_24fps.mp4",
  "/4990250-hd_1920_1080_30fps.mp4",
  "/7609195-uhd_3840_2160_25fps.mp4",
]

function VideoScene() {
  const currentIndex =  useRef<number>(0);
  const videoRef = useRef<HTMLMediaElement>();
  const textRef = useRef<HTMLDivElement>();

  const { hasSound } = useContext(SoundContext);


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
    if(hasSound) {
      videoRef.current.muted = false;
    } else {
      videoRef.current.muted = true;
    }
  }, [hasSound])

  function onLoadVideo(event: any) {
    console.log(event)
    
    toggleItems(true);
    event.target.play();
         
  }

  function onEndedVideo() {
    console.log("c'est fini")

    toggleItems(false);
  }

  function loadVideo(path: string) {
    if(!videoRef.current) {
      return;
    }

    videoRef.current.src = path;
    videoRef.current.load();
    videoRef.current.muted = false;

    //prepare next video
    currentIndex.current += 1;
    currentIndex.current = currentIndex.current % videosUrl.length;
  }

  function toggleItems(showVideo:boolean): void {
    if(showVideo) {
      videoRef.current.style.display = "block";
      textRef.current.style.display = "none";
    } else {
      videoRef.current.style.display = "none";
      textRef.current.style.display = "block";
    }
    
  }
  
	return (
    <div 
      className="h-screen"
      style={{border: "2px solid blue"}}
    >
      <div className="absolute top-2.5 right-2.5" style={{zIndex: 2}}>
        <SoundButton />
      </div>

      <p
      className="absolute top-2/4 text-center w-full text-8xl"
      style={{zIndex: 2}}
      ref={textRef}
      >
        <b>Shoot</b>
      </p>

      <div
        className="absolute bottom-2.5 right-2.5 card-xs shadow-sm bg-primary"
        style={{zIndex: 2}}
      >
        <div className="card-body">
          Source: {videosUrl[currentIndex.current]}
        </div>
      </div>
      

      <video 
        ref={videoRef}
        preload="none"
        muted // to load the video
        type="video/mp4"
        className="absolute w-full h-screen min-w-full min-h-full d-none"
        style={{width: "auto", height: "auto"}}
        //controls
        onLoadedMetadata={onLoadVideo}
        onEnded={onEndedVideo}
      >
      </video>
    </div>
  );

}

export default VideoScene;