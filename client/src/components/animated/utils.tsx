import { CSSProperties } from "react";
import ParticleCircle from "./ParticleCircle";

export const generateAtomKey = (modifiers: (number | string)[]) => {
  return `atomKey:` + modifiers.join(":");
};

export const generateCircleShape = (
  diameter: number,
  fill: CSSProperties["fill"]
) => {
  const radius = diameter / 2;
  const position = { cx: radius, cy: radius, r: radius };
  const dimension = { height: diameter, width: diameter };
  const fillColor = { fill: fill };
  return {
    dimension: dimension,
    position: position,
    ...fillColor,
  };
};

export const generateAtom = (numOfItems: number) => {
  new Array(numOfItems)
    .fill(generateCircleShape(24, "rgba(228, 0, 13, 0.24)"))
    .map((dot, index) => {
      if (!dot) return null;
      return <ParticleCircle key={dot + index} {...dot} />;
    });
};
