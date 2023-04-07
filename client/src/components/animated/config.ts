import { CSSProperties } from "react";

export type ParticlePositionRect = {
  x1: string | number;
  x2: string | number;
  y1: string | number;
  y2: string | number;
};

export type ParticlePositionCircle = {
  cx: string | number;
  cy: string | number;
  r: string | number;
};

export type ParticleDimension = {
  height: string | number;
  width: string | number;
};

export type ParticleGradient = {
  id: string;
  angle: number;
  stops: ParticleGradientStop[];
};

export type ParticleGradientStop = {
  offset: number;
  stopColor: CSSProperties["stopColor"];
};
