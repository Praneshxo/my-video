import { interpolate, useCurrentFrame, useVideoConfig, Sequence, spring } from "remotion";
import React from "react";

type Props = {
  label?: string; // Label is optional now
  position: "left" | "right";
  startFrame: number;
};

export const HorizontalSplitter: React.FC<Props> = ({
  label,
  position,
  startFrame,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const width = interpolate(frame, [45, 70], [200, 600], {
    extrapolateRight: "clamp",
  });

  const xOffset = position === "left" ? -120 : 120;
  const opacity = spring({
    frame: frame - startFrame,
    fps,
    from: 0,
    to: 1,
  });
  const scale = spring({
    frame: frame - startFrame,
    fps,
    from: 0.5,
    to: 1,
  });

  return (
    <Sequence from={startFrame}>
      <div
        style={{
          position: "absolute",
          top: 550, // end of vertical line
          left: 910 - width / 2,
          width,
          height: 4,
          backgroundColor: "#333",
          opacity, // Apply opacity to the splitter
          transform: `scaleX(${scale})`, // Apply scale to the width
          transformOrigin: "left center", // Ensure scaling happens from the left
        }}
      />
      {label && (
        <div
          style={{
            position: "absolute",
            top: 530, // Adjust position as needed
            left: position === "left" ? 910 - width - 10 : 910 + width + 10, // Adjust position based on width
            opacity,
          }}
        >
          {label}
        </div>
      )}
    </Sequence>
  );
};

export default HorizontalSplitter;