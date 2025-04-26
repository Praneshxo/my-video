import { spring, useCurrentFrame, useVideoConfig, Sequence } from "remotion";
import React from "react";

type Props = {
  label: string;
  position: "left" | "right" | "center";
  startFrame: number; // New prop to control the start frame
};

export const ChildBox: React.FC<Props> = ({
  label,
  position,
  startFrame,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  let xOffset: number;
  if (position === "left") {
    xOffset = -260;
  } else if (position === "right") {
    xOffset = 260;
  } else {
    xOffset = 0; // Set xOffset to 0 for the "center" position
  }

  const opacity = spring({
    frame: frame - startFrame, // Adjust frame for animation start
    fps,
    from: 0,
    to: 1,
  });
  const scale = spring({
    frame: frame - startFrame, // Adjust frame for animation start
    fps,
    from: 0.5,
    to: 1,
  });

  return (
    <Sequence from={startFrame}>
      <div
        style={{
          position: "absolute",
          top: 580,
          left: 930 + xOffset - 110,
          transform: `scale(${scale})`,
          opacity,
          height: 50,
          width: 180,
          backgroundColor: "#ffd6a7",
          borderRadius: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {label}
      </div>
    </Sequence>
  );
};

export default ChildBox;