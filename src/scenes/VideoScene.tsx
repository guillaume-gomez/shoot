import { useEffect, useRef, useMemo, useContext, useState } from "react";
import SoundButton from "../components/SoundButton";
import { SoundContext } from "../contexts/SoundContextWrapper";
import ShootItem from "../components/ShootItem";
import videoData from "../assets/VideoData"; 


function VideoScene() {
  const currentIndex =  useRef<number>(0);
  const videoRef = useRef<HTMLMediaElement>();
  const [visibleText, setTextVisible] = useState<boolean>(true);

  const { hasSound } = useContext(SoundContext);


  useEffect(() => {
    function keyPressed() {
      if(!videoRef.current.paused) {
        return;
      }
      loadVideo(videoData[currentIndex.current].url);

      //handlePlayButton();
    }
    document.addEventListener('keydown', keyPressed);
    
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

    if(!videoRef.current.paused) {
      return;
    }

    videoRef.current.src = path;
    videoRef.current.load();
    videoRef.current.muted = false;

    //prepare next video
    currentIndex.current += 1;
    currentIndex.current = currentIndex.current % videoData.length;
  }

  function toggleItems(showVideo:boolean): void {
    if(showVideo) {
      videoRef.current.style.display = "block";
      setTextVisible(false);
    } else {
      videoRef.current.style.display = "none";
      setTextVisible(true);
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

      <div
      className="absolute top-2/4 text-center w-full"
      style={{zIndex: 2}}
      >
        <ShootItem display={visibleText} />
      </div>

      <div
        className="absolute bottom-2.5 right-2.5 card-xs shadow-sm bg-primary"
        style={{zIndex: 2}}
      >
        <div className="card-body">
          <p className="text-base">
            Source: {videoData[currentIndex.current].source}
          </p>
        </div>
      </div>
      

      <video 
        ref={videoRef}
        preload="none"
        muted // to autoplay the video
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