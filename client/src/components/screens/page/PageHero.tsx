import { useLayoutEffect, useRef } from "react";

// const formatGradientString = (colors: ConfigRGBAObject[], deg: number) => {
//   const stopValue = (100 / length).toFixed(2) + "%";
//   const stopMap = new Array(length).fill(stopValue);
// };

// export const MET_GRADIENT_RED_TO_BLACK: ConfigRGBAObject[] = [
//   { r: 31, g: 162, b: 255, a: 1 },
//   { r: 18, g: 216, b: 250, a: 1 },
//   { r: 166, g: 255, b: 203, a: 1 },
// ];

// const metColors = {
//   red: [228, 0, 43],
//   black: [25, 26, 26],
//   white: [246, 247, 247],
// };

// const HeroGradient = ({
//   deg = 90,
//   colors = ,
// }: {
//   deg?: number;
//   colors?: GradientColor[];
// }) => {
//   const gradientRef = useRef<HTMLDivElement>(null);

//   useLayoutEffect(() => {
//   }, [colors]);

//   return <div ref={gradientRef} className="HeroGradient" />;
// };

type GradientValue = { [key: string]: number[] };
type GradientObject = GradientValue[];

export function HeroGradient<T extends GradientObject>({
  colors,
  angle,
}: {
  colors: T;
  angle: number;
}) {
  const gradientRef = useRef<HTMLDivElement>(null);
  console.log(gradientRef.current);
  return <div ref={gradientRef} className="HeroGradient" />;
}

export default function PageHero({
  action,
  title,
  text,
}: {
  text?: string;
  title?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="PageHero">
      {/* <HeroGradient /> */}
      {!title ? null : <h1 className="line52 p-regular">{title}</h1>}
      {!text ? null : <p className="line18 p-medium">{text}</p>}
      <div className="actionbox">
        <>{!action ? null : action}</>
      </div>
    </div>
  );
}
