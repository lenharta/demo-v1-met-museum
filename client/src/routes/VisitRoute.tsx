import {
  HTMLAttributes,
  HTMLInputTypeAttribute,
  createContext,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
import Icon, { IconType } from "../assets/Icon";
import { ConfigStateObject } from "../config";
import { Checkbox, Page, PageHero } from "../components";
import { APPTERMSAGREEMENT } from "../config.app";
import { capitalizeString } from "../utils";
// import { ModalTwo } from "../components/common/modal/Modal";

// const Toast = ({
//   config,
//   onClose,
//   closable,
//   duration,
// }: {
//   onClose: () => void;
//   closable?: boolean;
//   duration?: number;
//   config: {
//     title: string;
//     text: string;
//   };
// }) => {
//   const expirationRef = useRef<number>(0);
//   const willAutoClose = duration !== Infinity;

//   console.log(willAutoClose);
//   console.log(expirationRef.current);

//   const scheduleExpiration = useCallback(() => {
//     if (willAutoClose) {
//       return;
//     }
//     expirationRef.current = window.setTimeout(
//       () => onClose(),
//       duration ?? DEFAULT_TOAST_EXPIRATION
//     );
//   }, [onClose, duration, willAutoClose]);

//   useEffect(() => {
//     if (!willAutoClose) {
//       return;
//     }
//     scheduleExpiration();
//     return () => clearTimeout(expirationRef.current);
//   }, [scheduleExpiration, config.title, duration, willAutoClose]);

//   const onMouseEnter = willAutoClose
//     ? () => clearTimeout(expirationRef?.current)
//     : undefined;

//   const onMouseLeave = willAutoClose ? scheduleExpiration : undefined;

//   return (
//     <div
//       className="Toast"
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//     >
//       <h3 className="Toast__title">{config.title}</h3>
//       <p className="Toast__text">{config.text}</p>
//       {closable && (
//         <IconButton icon="Close" ariaLabel="close" onClick={onClose} />
//       )}
//     </div>
//   );
// };

export const lookupToolIcons: IconObjectType = {
  help: "StatusHelpOutline",
  close: "CloseOutline",
};
export type IconObjectType = { [key: string]: IconType };
export type LookupTypeToolIcon = typeof lookupToolIcons;
export type LookupTypeToolIconKeys = keyof LookupTypeToolIcon;

export const ToolIcon = ({
  type,
  label,
  onClick,
  value,
}: {
  type?: "close" | "help";
  value: string;
  onClick: () => void;
  label: { id: string; text: string };
}) => {
  return (
    <div className="ToolIcon">
      <button className="ToolIconButton" onClick={onClick} value={value}>
        <Icon name={lookupToolIcons[type as keyof typeof lookupToolIcons]} />
      </button>
      <p className="visuallyHidden">{label.text}</p>
    </div>
  );
};

// [$] EXPIRATION TIMES
export const EXPIRATION_TOAST = 2000;
export const EXPIRATION_LOADER = 2000;

// [$] DATETIME VALUES
export const DATETIME_LOCAL_MIN = "1/01/2500, 12:00:00 PM";
export const DATETIME_LOCAL_MAX = "1/01/1990, 12:00:00 PM";
export const DATETIME_VALUE_MIN = 0;
export const DATETIME_VALUE_MAX = 31;
export const DATETIME_VALUE_LEAP = 28 ?? 29;

// ? Datetime examples
// export const DEFAULT_DATE = new Date(1969, 12, 1);
/// 1/1/1970, 12:00:00 AM (since 0 based)
// export const DEFAULT_DATE_COPY = new Date();
// DEFAULT_DATE_COPY.setTime(DEFAULT_DATE.getTime());
// console.log("3/29/2023, 7:12:30 PM"); === toLocalString()

// [$] REGEX - 24 HOUR DATETIME
// ? 23:50:00 14:00 23:00 9:30 19:30
export const UTIL_RGX_24HRS = /'([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?'/g;

// [$] REGEX - US PHONE NUMBERS
// ? 650-555-2345 || 415-555-1234 || 4035555678
// ? 1 416 555 9292 || (416)555-3456 || 202 555 4567
export const RGX_PHONE = /'(?:\d{1}\s)?\(?(\d{3})\)?-?\s?(\d{3})-?\s?(\d{4})'/g;

// [$] CALCULATE LEAPYEAR DATE - (DAY VALUE) 28 days leap 29 year
export const calculateLeapYear = (year: number) => {
  const condition04 = 0 == year % 4;
  const condition100 = 0 != year % 100;
  const condition400 = 0 == year % 400;
  if ((condition04 && condition100) || condition400) {
    return 29;
  } else {
    return 28;
  }
};

const SkipToLink = () => {
  return (
    <Link to="#maincontent" className="SkipToLink">
      Skip to content
    </Link>
  );
};

const HashTitle = ({ id, text }: { id: string; text: string }) => {
  return (
    <h1 className="HashTitle">
      <a id={id} className="HashLink"></a> {text}
    </h1>
  );
};

const applookupMonth = {
  jan: { name: "january", days: 31 },
  feb: { name: "february", days: 28 ?? 29 },
  mar: { name: "march", days: 31 },
  apr: { name: "april", days: 30 },
  may: { name: "may", days: 31 },
  jun: { name: "june", days: 30 },
  jul: { name: "july", days: 31 },
  aug: { name: "august", days: 31 },
  sep: { name: "september", days: 30 },
  oct: { name: "october", days: 31 },
  nov: { name: "november", days: 30 },
  dec: { name: "december", days: 31 },
};

const composeAppMonthMap = (lookup: typeof applookupMonth) => {
  console.log(lookup);
};

export const daySuffixOptions = {
  st: [1, 21, 31],
  nd: [2, 22],
  rd: [3, 23],
};

// const MonthSelect = () => {
//   return (
//     <ul role="" id="monthselect">
//       {applookupMonth.map(({ abbr, name }) => (
//         <li key={abbr + "-" + name} value={name}>
//           <>{capitalizeString(name)}</>
//         </li>
//       ))}
//     </ul>
//   );
// };

export type BreadCrumbObject = { text: string; url: string; id: string };

export const BreadCrumb = ({ ...props }: BreadCrumbObject) => {
  return (
    <div className="BreadCrumb">
      <Icon name="Hashtag" />
      <Link to={props.url} id={props.id}>
        {capitalizeString(props.text)}
      </Link>
    </div>
  );
};

export type BreadCrumbLinkMap = { links: Map<string, BreadCrumbObject> };

export const BreadCrumbGroup = ({ links }: BreadCrumbLinkMap) => {
  return (
    <div
      role="navigation"
      aria-label="breadcrumb bar"
      className="BreadCrumbGroup"
    >
      <p>BreadCrumbGroup</p>
    </div>
  );
};

const TestAccentRed = "#E4002B";
const TestNeutralBlack = "#181919";
const TestNeutralWhite = "#f6f7f7";

const colorTestLookup = {
  red: "#E4002B",
  black: "#181919",
  white: "#F6F7F7",
};

// [$] USE: add value identifier on export
// e.g. #1 | button:r0:mode-light
// e.g. #2 | button:r0:mode-dark

const useAccessibleIDs = <T extends {}>(identifiers: string[]) => {
  const uid = useId();
  return identifiers.map((value, index) => {
    if (!value) return null;
    return {
      [value]: `${value}-${uid}`,
    } as T;
  });
};

type ConfigThemeVariant =
  | "basePrimary"
  | "onPrimary"
  | "baseSecondary"
  | "onSecondary"
  | "baseAccent"
  | "onAccent";

const themeSwatches = [
  {
    key: "basePrimary",
    label: "BASE | PRIMARY",
    bgColor: colorTestLookup.black,
    color: colorTestLookup.white,
  },
  {
    key: "onBasePrimary",
    label: "ON-BASE | PRIMARY",
    bgColor: colorTestLookup.white,
    color: colorTestLookup.black,
  },
  {
    key: "baseSecondary",
    label: "BASE | SECONDARY",
    bgColor: colorTestLookup.white,
    color: colorTestLookup.black,
  },
  {
    key: "onBaseSecondary",
    label: "ON-BASE | SECONDARY",
    bgColor: colorTestLookup.black,
    color: colorTestLookup.white,
  },
  {
    key: "baseAccent",
    label: "BASE | ACCENT",
    bgColor: colorTestLookup.red,
    color: colorTestLookup.white,
  },
  {
    key: "onBaseAccent",
    label: "ON-BASE | ACCENT",
    bgColor: colorTestLookup.white,
    color: colorTestLookup.red,
  },
  {
    key: "onBaseAccent2",
    label: "ON-BASE | ACCENT",
    bgColor: colorTestLookup.black,
    color: colorTestLookup.red,
  },
  {
    key: "onBaseAccent3",
    label: "ON-BASE | ACCENT",
    color: colorTestLookup.black,
    bgColor: colorTestLookup.red,
  },
];

const useElementId = <T extends HTMLAttributes<HTMLInputTypeAttribute>>(
  type: T
) => {
  const uid = useId();
  console.log("type", type);
  console.log("uid", uid);
};

const SwatchGroup = ({
  data = themeSwatches,
}: {
  data?: typeof themeSwatches;
}) => {
  const uids = useAccessibleIDs(["button"]);
  return (
    <section className="SwatchGroup grid">
      {data.map(({ bgColor, color, label, key }) => (
        <div
          key={key}
          className="SwatchCard"
          style={{ backgroundColor: bgColor, color: color }}
        >
          <h3>{label}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            incidunt rerum accusantium quam expedita illum iste, ab, sapiente
            repellendus libero tempora? Eaque numquam aliquam corrupti illo
            sapiente esse facilis fugiat dolorem nulla voluptatum. Voluptas
            atque eius reiciendis culpa facilis? Quasi.
          </p>

          <div className="SwatchActions">
            <button
              style={{ backgroundColor: color, color: bgColor }}
              value={key + "primary"}
              onChange={(e) => {
                const target = e.target as typeof e.target & { value: string };
                return console.log(target.value);
              }}
            >
              Button
            </button>
            <button
              style={{ backgroundColor: color, color: bgColor }}
              value={key + "secondary"}
              onChange={(e) => {
                const target = e.target as typeof e.target & { value: string };
                return console.log(target.value);
              }}
            >
              Button
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

// const A = () => <p>A</p>;
// const B = () => ReactDOM.createPortal(
//   <p>B</p>,
//   document.querySelector("#portal")
// );
// const App = () => <React.Fragment><A /><B /></React.Fragment>;

// ReactDOM.createRoot(document.querySelector("#app"))
//   .render(<App />);

console.log("before render");
const TestComponentLayoutEffect = () => {
  const [container, containerSet] = useState(false);
  const popup = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  // useLayoutEffect(() => {
  //   if (popup.current == null || button.current == null) return;
  //   const { bottom } = button.current.getBoundingClientRect();
  //   popup.current.style.top = `${bottom + 25}px`;
  //   return () => console.log("AFTER render");
  // }, [container]);

  // [$]: Compare To Standard ( useEffect(() => {}, []) ) hook
  useEffect(() => {
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 25}px`;
    return () => console.log("AFTER render");
  }, [container]);

  return (
    <>
      <button ref={button} onClick={() => containerSet((prev) => !prev)}>
        Click Here
      </button>
      {container && (
        <div style={{ position: "absolute", color: "yellow" }} ref={popup}>
          This is a popup
        </div>
      )}
    </>
  );
};

export function TestComponentSingleCheckbox() {
  const [acceptTerms, acceptTermsSet] = useState<boolean>(false);
  return (
    <Checkbox
      option={{ value: acceptTerms, text: APPTERMSAGREEMENT.checkMessage }}
      onChange={() => acceptTermsSet(!acceptTerms)}
    />
  );
}

const VisitRoute = () => {
  const numbers = [4, 3, 1, 2];

  function compare(n1: number, n2: number) {
    if (n1 % 2 === 0 && n2 % 2 !== 0) {
      return -1;
    }
    if (n1 % 2 !== 0 && n2 % 2 === 0) {
      return 1;
    }
    return 0;
  }
  numbers.sort(compare);
  numbers; // => [4, 2, 3, 1]

  return (
    <Page hero={<PageHero title="Visit" />}>
      {/* <ModalTwo /> */}
      <TestComponentLayoutEffect />
      <SwatchGroup />
    </Page>
  );
};
export default VisitRoute;

// pattern="\d{2}-\d{2}-\d{4}"
