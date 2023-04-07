import { CSSProperties, useRef } from "react";

type FillColor = CSSProperties["fill"];
type AnimationType =
  | "FadeIn"
  | "FadeOut"
  | "FadeInWave"
  | "FadeOutWave"
  | "PulseWave";

export const SplashCell = ({
  animation,
  styles,
}: {
  animation?: { ["data-animate"]: AnimationType };
  styles: { fill: FillColor };
}) => {
  const rectangleRef = useRef<SVGRectElement>(null);
  return (
    <svg
      id="atom"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...animation}
    >
      <rect ref={rectangleRef} {...styles} />
    </svg>
  );
};

const testRectData: {
  styles: { fill: CSSProperties["fill"] };
  animation: AnimationType;
}[] = [
  { styles: { fill: "red" }, animation: "PulseWave" },
  { styles: { fill: "red" }, animation: "PulseWave" },
  { styles: { fill: "red" }, animation: "PulseWave" },
  { styles: { fill: "red" }, animation: "PulseWave" },
  { styles: { fill: "red" }, animation: "PulseWave" },
  { styles: { fill: "red" }, animation: "PulseWave" },
  { styles: { fill: "red" }, animation: "PulseWave" },
  { styles: { fill: "red" }, animation: "PulseWave" },
  { styles: { fill: "red" }, animation: "PulseWave" },
  { styles: { fill: "red" }, animation: "PulseWave" },
  { styles: { fill: "red" }, animation: "PulseWave" },
  { styles: { fill: "red" }, animation: "PulseWave" },
  { styles: { fill: "red" }, animation: "PulseWave" },
  { styles: { fill: "red" }, animation: "PulseWave" },
  { styles: { fill: "red" }, animation: "PulseWave" },
  { styles: { fill: "red" }, animation: "PulseWave" },
  { styles: { fill: "red" }, animation: "PulseWave" },
  { styles: { fill: "red" }, animation: "PulseWave" },
];

export const SplashGrid = ({
  data,
}: {
  data: {
    animation: AnimationType;
    styles: { fill: CSSProperties["fill"] };
  }[];
}) => {
  return (
    <div className="SplashGrid">
      {data.map((cell, index) => {
        if (!cell) return null;
        return (
          <div className="SplashGridCell" key={cell.styles.fill + ":" + index}>
            <SplashCell
              animation={{ "data-animate": cell.animation }}
              styles={cell.styles}
            />
          </div>
        );
      })}
    </div>
  );
};
