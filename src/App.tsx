import { useContext } from "react";
import { SceneContext } from "./contexts/SceneContextWrapper";
import Intro from "./scenes/Intro";
import VideoScene from "./scenes/VideoScene";


function App() {
  const {
    sceneIndex
  } = useContext(SceneContext);

  return (
    <>
    { sceneIndex == 1 && <Intro /> }
    { sceneIndex == 2 && <VideoScene /> }
    </>
  )
}

export default App
