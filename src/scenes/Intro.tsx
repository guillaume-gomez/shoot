import SoundButton from "../components/SoundButton";

function Intro() {
	return (
    <div className="h-screen" style={{border: "2px solid red"}}>
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