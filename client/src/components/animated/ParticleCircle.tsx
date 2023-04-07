import { CSSProperties } from "react";
import { ParticleDimension, ParticlePositionCircle } from "./config";

const ParticleCircle = ({
  position,
  dimension,
  fill,
}: {
  position: ParticlePositionCircle;
  dimension: ParticleDimension;
  fill: CSSProperties["fill"];
}) => {
  return (
    <svg
      id="atom"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={dimension}
    >
      <circle {...dimension} {...position} fill={fill} />
    </svg>
  );
};

export const TestParticleCircle = () => {
  return (
    <ParticleCircle
      dimension={{ height: 100, width: 100 }}
      position={{ cx: 50, cy: 50, r: 50 }}
      fill="orange"
    />
  );
};

export default ParticleCircle;
