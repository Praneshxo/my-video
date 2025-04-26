import { interpolate, useCurrentFrame } from "remotion";

export const VerticalLine: React.FC = () => {
  const frame = useCurrentFrame();
  const height = interpolate(frame, [15, 45], [0, 100], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 450, // Just below MainBox
        left: 910, // Match MainBox center
        width: 4,
        height,
        backgroundColor: "#333",
      }}
    />
  );
};

export default VerticalLine;