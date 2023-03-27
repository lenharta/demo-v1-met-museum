import { CSSProperties } from "react";

export type Coordinate = { x: string; y: string };
export type CoordinatePlot = { [key: string]: Coordinate };
export type ColorName = CSSProperties["color"];

export const defaultAtomLine: AtomProps = {
  width: 100,
  height: 100,
  points: {
    x1: 0,
    y1: 80,
    x2: 100,
    y2: 20,
  },
};

export type AtomProps = {
  width?: number;
  height?: number;
  stroke?: ColorName;
  points?: {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
  };
};
