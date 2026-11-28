import { useContext, useEffect } from "react";
import { SceneContext } from "../contexts/SceneContextWrapper";
import SoundButton from "../components/SoundButton";

function Intro() {
  const {
    setSceneIndex
  } = useContext(SceneContext);

  useEffect(() => {
    function keyPressed() {
      setSceneIndex(2);
    }
    document.addEventListener('keydown', keyPressed);
    
    return () => {
      document.removeEventListener('keydown', keyPressed);
    };

  }, []);

	return (
    <div className="h-screen" style={{border: "2px solid red"}}>

      <div style={{
        fontSize:25,
        color:'#6C6A6A',
        backgroundColor:'#444444',
        fontFamily:'arial,sans-serif',
        textTransform:'uppercase',
        textShadow: '0 1px 0 #999999, 0 2px 0 #888888, 0 3px 0 #777777, 0 4px 0 #666666, 0 5px 0 #555555, 0 6px 0 #444444, 0 7px 0 #333333, 0 8px 7px #2C2D30'
      }}>
        <h1>Mesures de protection exceptionnelle en cours</h1>
      </div>
      
      <div id="foglayer_01" className="fog">
       <div className="image01 fog-image"></div>
       <div className="image02 fog-image"></div>
      </div>
      <div id="foglayer_02" className="fog">
       <div className="image01 fog-image"></div>
       <div className="image02 fog-image"></div>
      </div>  
      <div id="foglayer_03" className="fog">
       <div className="image01 fog-image"></div>
       <div className="image02 fog-image"></div>
      </div>

      <div className="absolute top-2.5 right-2.5">
        <SoundButton />
      </div>

      <p className="absolute top-2/4 text-center w-full text-5xl">
        Pressez
        <span className="px-2">
          <kbd className="kbd kbd-xl">Entrée</kbd>
        </span>
        lorsque que le mot <b>Shoot</b> apparait
      </p>

      <p className="absolute bottom-1/4 text-center w-full text-xl">
        Fait par <a href="">Guillaume Gomez</a>
      </p>
    </div>
  );

}

export default Intro;