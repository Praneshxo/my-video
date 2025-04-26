import { spring, useCurrentFrame, useVideoConfig } from "remotion";

export const MainBox: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animate scale from 0.5 to 1 using a spring animation
  const scale = spring({
    frame,
    fps,
    from: 0.5,
    to: 2,
    config: {
      damping: 200,
      stiffness: 100,
    },
  });
  const opacity = spring({
    frame,
    fps,
    from: 0,
    to: 1,
    config: {
      damping: 200,
      stiffness: 100,
    },
  });

  return (
    <div
      style={{
        position: "absolute", 
        top: 400,             
        left: 910,            
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: 180,
        backgroundColor: '#a7cdff',
        borderRadius: 30,
        transform: `translate(-50%, -50%) scale(${scale})`,
        opacity: opacity,
        
      }}
      
    >
    The 3 options 
    </div>
  );
};

export default MainBox;