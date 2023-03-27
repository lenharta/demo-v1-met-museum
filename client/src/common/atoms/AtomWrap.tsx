import { AtomProps } from "./config";

export default function AtomWrap({
  width,
  height,
  children,
}: AtomProps & { children?: React.ReactNode }) {
  return (
    <svg
      id="atom"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? 32}
      height={height ?? 32}
      viewBox={`0 0 ${height ?? 32} ${width ?? 32}`}
    >
      <>{!children ? null : children}</>
    </svg>
  );
}
