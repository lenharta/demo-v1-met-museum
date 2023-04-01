import { useState } from "react";
import { Page, PageHero } from "../components";
import { TheMetLogo } from "../assets";
import { Link } from "react-router-dom";

const TabSelect = <T extends string>({ tabs }: { tabs: T[] }) => {
  const [activeIndex, activeIndexSet] = useState(0);
  console.log("ACTIVEINDEX", activeIndex);

  return (
    <section className="TabSelect" aria-multiselectable={false}>
      <ul className="TabSelectList" role="tablist">
        {tabs.map((value, index) => (
          <li className="TabSelectItem" role="presentation">
            <button
              role="tab"
              tabIndex={0}
              aria-setsize={3}
              aria-posinset={1}
              aria-selected="true"
              aria-controls="tab-panel-1"
            >
              <>{value}</>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default function IndexRoute() {
  return (
    <Page hero={<PageHero title="Home" />}>
      <TabSelect tabs={["tab-1", "tab-2", "tab-3", "tab-4"]} />
    </Page>
  );
}

export type Coordinate = { x: string; y: string };
export type CoordinatePlot = { [key: string]: Coordinate };
export type ColorName = React.CSSProperties["color"];

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

export function MetLogoLink() {
  return (
    <div className="TheMetLink">
      <Link to="/">
        <TheMetLogo />
      </Link>
    </div>
  );
}

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

export function AtomWrap({
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

// panels,
// panels: React.ReactNode[];
// const panelRef = useRef(panels[activeIndex]);
// console.log("ACTIVEPANEL", panelRef);
// <div className="TabSelectDisplay">
//   <>{panelRef.current}</>
// </div>
