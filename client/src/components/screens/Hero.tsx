import { Link } from "react-router-dom";
import { CSSProperties } from "react";
import { METMUSEUM_COLOR_HEXCODE } from "../../utils/constants/metMuseumColors";

type HeroCopyProps = { title: string; tagline: string };
type HeroLinkProps = { url: string; text: string };
type HeroGradientProps = {
  angle: number;
  stops: {
    offset?: number;
    stopColor?: string;
    stopOpacity?: CSSProperties["stopOpacity"];
  }[];
};

const HeroGradient = ({
  angle = 75,
  stops = [
    { stopColor: METMUSEUM_COLOR_HEXCODE.red, offset: 0, stopOpacity: 0.9 },
    { stopColor: METMUSEUM_COLOR_HEXCODE.red, offset: 50, stopOpacity: 0.5 },
    { stopColor: METMUSEUM_COLOR_HEXCODE.red, offset: 95, stopOpacity: 0.0 },
  ],
}: Partial<HeroGradientProps>) => {
  const rotation = { gradientTransform: `rotate(${angle})` };
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="Hero-gradient"
    >
      <defs>
        <linearGradient id="HeroGradientUrl" {...rotation}>
          {stops.map((stop, index) => {
            if (!stop) return null;
            return (
              <stop
                key={`${stop.offset}` + index}
                offset={stop.offset + "%"}
                stopOpacity={stop.stopOpacity}
                stopColor={stop.stopColor}
              />
            );
          })}
        </linearGradient>
      </defs>
      <rect fill={`url('#HeroGradientUrl')`} />
    </svg>
  );
};

const HeroCopy = ({ title, tagline }: Partial<HeroCopyProps>) => {
  if (!title) return null;
  return (
    <>
      <h1 className="Hero-title line84 p-regular">{title}</h1>
      {!tagline ? null : (
        <p className="Hero-tagline line18 p-medium">{tagline}</p>
      )}
    </>
  );
};

export const HeroLink = ({ url, text }: Partial<HeroLinkProps>) => {
  return (
    <div>
      <Link className="Hero-link" to={url ?? "/"}>
        {text}
      </Link>
    </div>
  );
};

const Hero = ({
  title,
  tagline,
  action,
}: {
  title?: string;
  tagline?: string;
  action?: React.ReactNode;
}) => {
  return (
    <div className="Hero">
      <HeroGradient />
      <HeroCopy title={title} tagline={tagline} />
      {!action ? null : (
        <div className="Hero-ActionBox">
          <>{action}</>
        </div>
      )}
    </div>
  );
};
export default Hero;
