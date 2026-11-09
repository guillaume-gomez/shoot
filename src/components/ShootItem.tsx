import { useSpring, animated, easings } from '@react-spring/web';
import useWithSound from "../customHooks/useWithSound";
import message from '/message.mp3';

interface ShootItemProps {
  display: boolean;
}

function ShootItem({ display } : ShootItemProps) {
  const { playSound } = useWithSound(message);

  const springs = useSpring({
    ...display ? 
      { scale: 2, opacity: 1 }:
      { scale: 0, opacity: 0 },
    onStart: () => { playSound() },
    config: { duration: 250, easing: easings.easeOutCirc },
  });


  return (
    <animated.div
      className="text-center text-8xl"
      style={{
        background: '#ff6d6d',
        ...springs,
      }}
    >
      Shoot !
    </animated.div>
  );
}

export default ShootItem;