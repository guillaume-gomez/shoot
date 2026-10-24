import { useContext } from "react";
import { SoundContext } from "../contexts/SoundContextWrapper";

function SoundButton() {
	const {
    hasSound,
    setHasSound,
  } = useContext(SoundContext);

  return (
    <button className="btn btn-ghost" onClick={() => setHasSound(!hasSound)} >
      { hasSound ? "Disable Sound" : "Enable Sound"}
    </button>
  );
}

export default SoundButton;