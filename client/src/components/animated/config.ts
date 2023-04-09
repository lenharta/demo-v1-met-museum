import { CSSProperties } from "react";

export type SVGAtomDimensions<T = string | number> = {
  circle: { height: T; width: T };
  ellipsis: { height: T; width: T };
  line: { height: T; width: T };
  polygon: { height: T; width: T };
  rectangle: { height: T; width: T };
};

export type SVGAtomPosition<T = string | number> = {
  circle: { x: T; y: T };
  ellipsis: { x: T; y: T };
  line: { x: T; y: T };
  polygon: { x: T; y: T };
  rectangle: { x: T; y: T };
};
