import { useSpring, animated, easings } from '@react-spring/web';

interface ShootItemProps {
  display: boolean;
}

function ShootItem({ display } : ShootItemProps) {
  const springs = useSpring({
    ...display ? 
      { scale: 2, opacity: 1 }:
      { scale: 0, opacity: 0 },
    config: { duration: 250, easing: easings.easeOutCirc },
  })

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