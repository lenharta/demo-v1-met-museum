import { CSSProperties } from "react";
import { SVGAtomDimensions, SVGAtomPosition } from "../config";
import Atom from "./Atom";

const AtomRect = <T extends CSSProperties>({
  uniqueAtomId,
  dimensions,
  position,
  styles,
}: {
  uniqueAtomId?: string;
  dimensions?: SVGAtomDimensions["rectangle"];
  position?: SVGAtomPosition["rectangle"];
  styles?: {
    fill: T["fill"];
    stroke: T["stroke"];
    strokeWidth: T["strokeWidth"];
  };
}) => {
  return (
    <Atom>
      <rect
        id={uniqueAtomId}
        className={uniqueAtomId}
        {...dimensions}
        {...position}
        {...styles}
      />
    </Atom>
  );
};
export default AtomRect;
