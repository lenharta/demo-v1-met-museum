import { CSSProperties } from "react";
import {
  ParticleDimension,
  ParticleGradient,
  ParticlePositionRect,
} from "./config";
import { generateAtomKey } from "./utils";

type ParticleRectProps = {
  position: ParticlePositionRect;
  dimension: ParticleDimension;
  fill: CSSProperties["fill"];
};

const ParticleRect = ({ position, dimension, fill }: ParticleRectProps) => {
  return (
    <svg
      id="atom"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={dimension}
    >
      <rect {...dimension} {...position} fill={fill} />
    </svg>
  );
};

export const TestParticleRect = () => {
  return (
    <ParticleRect
      dimension={{ height: 100, width: 100 }}
      position={{ x1: 0, x2: 0, y1: 0, y2: 0 }}
      fill="red"
    />
  );
};

export default ParticleRect;

const TEST_GRADIENT_CIRCLE = {
  id: "TEST_GRADIENT_CIRCLE",
  angle: 90,
  stops: [
    { stopColor: "rgb(228, 0, 43)", stopOffset: 5 },
    { stopColor: "rgb(228, 0, 20)", stopOffset: 100 },
  ],
};

export const AtomGradient = ({
  gradient,
  dimension,
}: {
  gradient: ParticleGradient;
  dimension: ParticleDimension;
}) => {
  const { angle, id, stops } = gradient;
  const elementGradientRotation = { gradientTransform: `rotate(${angle})` };
  const elementViewBox = {
    viewBox: [0, 0, dimension.height, dimension.width].join(" "),
  };
  return (
    <svg
      id="atom"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...elementViewBox}
      {...dimension}
    >
      <defs>
        <linearGradient {...elementGradientRotation}>
          {stops.map((stop, index) => {
            if (!stop) return null;
            return (
              <stop
                offset={stop.offset + "%"}
                stopColor={stop.stopColor}
                key={generateAtomKey([
                  index,
                  String(stop.stopColor),
                  String(stop.offset),
                ])}
              />
            );
          })}
        </linearGradient>
      </defs>
    </svg>
  );
};
