import { CSSProperties } from "react";

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

// export const generateAtom = (numOfItems: number) => {
//   new Array(numOfItems)
//     .fill(generateCircleShape(24, "rgba(228, 0, 13, 0.24)"))
//     .map((dot, index) => {
//       if (!dot) return null;
//       return <ParticleCircle key={dot + index} {...dot} />;
//     });
// };

export const SplashGridShapes = () => {
  return (
    <svg
      width="200"
      height="250"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="10"
        y="10"
        width="30"
        height="30"
        stroke="black"
        fill="transparent"
        stroke-width="5"
      />
      <rect
        x="60"
        y="10"
        rx="10"
        ry="10"
        width="30"
        height="30"
        stroke="black"
        fill="transparent"
        stroke-width="5"
      />

      <circle
        cx="25"
        cy="75"
        r="20"
        stroke="red"
        fill="transparent"
        stroke-width="5"
      />
      <ellipse
        cx="75"
        cy="75"
        rx="20"
        ry="5"
        stroke="red"
        fill="transparent"
        stroke-width="5"
      />

      <line
        x1="10"
        x2="50"
        y1="110"
        y2="150"
        stroke="orange"
        stroke-width="5"
      />
      <polyline
        points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
        stroke="orange"
        fill="transparent"
        stroke-width="5"
      />

      <polygon
        points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
        stroke="green"
        fill="transparent"
        stroke-width="5"
      />

      <path
        d="M20,230 Q40,205 50,230 T90,230"
        fill="none"
        stroke="blue"
        stroke-width="5"
      />
    </svg>
  );
};

// @keyframes slideInLeft {
//   from {
//     transform: translate3d(-100%, 0, 0);
//     visibility: visible;
//   }
//   to {
//     transform: translate3d(0, 0, 0);
//   }
// }
// .slideInLeft {
//   animation-name: slideInLeft;
// }

// type FillColor = CSSProperties["fill"];
// type AnimationType =
//   | "FadeIn"
//   | "FadeOut"
//   | "FadeInWave"
//   | "FadeOutWave"
//   | "PulseWave";

// export const SplashCell = ({
//   animation,
//   styles,
// }: {
//   animation?: { ["data-animate"]: AnimationType };
//   animationDelay: CSSProperties["animationDelay"];
//   styles: { fill: FillColor };
// }) => {
//   const rectangleRef = useRef<SVGRectElement>(null);
//   return (
//     <svg
//       id="atom"
//       xmlns="http://www.w3.org/2000/svg"
//       xmlnsXlink="http://www.w3.org/1999/xlink"
//       {...animation}
//     >
//       <rect ref={rectangleRef} {...styles} />
//     </svg>
//   );
// };

// export const SplashGrid = ({
//   data = [
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//     { styles: { fill: "red" }, animation: "PulseWave" },
//   ],
// }: {
//   data?: {
//     animation: AnimationType;
//     styles: { fill: CSSProperties["fill"] };
//   }[];
// }) => {
//   return (
//     <div className="SplashGrid">
//       {data.map((cell, index) => {
//         if (!cell) return null;
//         return (
//           <div className="SplashGridCell" key={cell.styles.fill + ":" + index}>
//             <SplashCell
//               styles={cell.styles}
//               animationDelay={`${index * 1000}ms`}
//               animation={{ "data-animate": cell.animation }}
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// };
