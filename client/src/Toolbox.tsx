import {
  HTMLAttributes,
  HTMLInputTypeAttribute,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { Checkbox } from "./components";
import Icon, { IconType } from "./assets/Icon";
import { capitalizeString } from "./utils";
import { METAppTermsAgreement } from "./app/config";

// pattern="\d{2}-\d{2}-\d{4}"

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
      option={{ value: acceptTerms, text: METAppTermsAgreement.checkMessage }}
      onChange={() => acceptTermsSet(!acceptTerms)}
    />
  );
}

const Toolbox = () => {
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
    <div className="Toolbox">
      <h3>Toolbox</h3>
      <TestComponentLayoutEffect />
      <SwatchGroup />
    </div>
  );
};
export default Toolbox;

export const MarkupCopyVisitPage = () => {
  return (
    <>
      <h2>Markup Copy Visit Page</h2>

      <h3>Vistor Guidelines</h3>
      <p>Masks are strongly recommended. Review our lastest guidelines</p>

      <h3>Parking and Directions</h3>
      <p>Get information on traveling to the museum</p>

      <h3>Museum Map</h3>
      <p>Museum Map Use The Met's interactive map to get around the Museum.</p>

      <h3>Accessibility</h3>
      <p>
        We're committed to offering programs and services that are accessible to
        everyone.
      </p>

      <h3>Dining</h3>
      <p>
        Choose from a wide menu that includes items for our youngest visitors
      </p>

      <h3>Membership</h3>
      <p>
        Enjoy free admission, complimentary guest tickets, invitations to
        exclusive viewing hours, discounts, and more.
      </p>
    </>
  );
};

export const DepartmentCardCopy = () => {
  return (
    <>
      <div>
        <h3>African Art in The Michael C. Rockefeller Wing</h3>
        <p>
          The Met's collection of works by artists from across sub-Saharan
          Africa comprises nearly 3,000 works spanning two millennia, several
          hundred distinct cultures, and 39 contemporary nation states.
        </p>
        <p>
          Several sculptures are exhibited throughout a large, open, indoor
          court.
        </p>
      </div>
      <div>
        <h3>The American Wing</h3>
        <p>
          Ever since its establishment in 1870, the Museum has acquired
          important examples of American art. Today, the American Wing's
          ever-evolving collection comprises some 20,000 works by African
          American, Euro American, Native American, and Latin American artists,
          ranging from the colonial to early-modern period.
        </p>
        <p>
          Room from an ancient Assyrian place decorated with large stone relief
          panels and colossal winged, human-headed animal deity sculptures.
        </p>
      </div>
      <div>
        <h3>Ancient Near Eastern Art</h3>
        <p>
          The Met's collection of ancient Near Eastern art includes more than
          7,000 works ranging in date from the eighth millennium B.C. through
          the centuries just beyond the time of the Arab conquests of the
          seventh century A.D.
        </p>
      </div>
      <div>
        <h3>Arms and Armor</h3>
        <p>
          The principal goals of the Arms and Armor Department are to collect,
          preserve, research, publish, and exhibit distinguished examples
          representing the art of the armorer, swordsmith, and gunmaker.
        </p>
      </div>
      <div>
        <h3>Ancient American Art in The Michael C. Rockefeller Wing</h3>
        <p>
          The Met's collection of ancient American art, situated in the Michael
          C. Rockefeller Wing, comprises more than 6,000 works of art
          representing almost 5,000 years of history from North, Central, and
          South America and the Caribbean.
        </p>
        <p>
          An interior courtyard with pagodas, plantings, ornamental rocks, and a
          fish pond.
        </p>
      </div>
      <div>
        <h3>Asian Art</h3>
        <p>
          The Met's collection of Asian art—more than 35,000 objects, ranging in
          date from the third millennium B.C. to the twenty-first century—is one
          of the largest and most comprehensive in the world.
        </p>
        <p>
          Mannequins lined up on a display wearing futuristic, metallic outfits.
        </p>
      </div>
      <div>
        <h3>The Costume Institute</h3>
        <p>
          The Costume Institute's collection of more than 33,000 costumes and
          accessories represents five continents and seven centuries of
          fashionable dress and accessories for men, women, and children, from
          the fifteenth century to the present.
        </p>
        <p>Room with wooden floors and prints on a gray wall.</p>
      </div>
      <div>
        <h3>Drawings and Prints</h3>
        <p>
          The Met's collection of drawings and prints—one of the most
          comprehensive and distinguished of its kind in the world—began with a
          gift of 670 works from Cornelius Vanderbilt, a Museum trustee, in
          1880.
        </p>
        <p>
          An ancient Egyptian sandstone temple in two separate parts in a large
          glass-enclosed gallery at dusk; the first part of the temple is a
          large squared arch, the second is a small rectangular building fronted
          by two columns topped with stylized leaves and plants.
        </p>
      </div>
      <div>
        <h3>Egyptian Art</h3>
        <p>
          The Met's collection of ancient Egyptian art consists of approximately
          26,000 objects of artistic, historical, and cultural importance,
          dating from the Paleolithic to the Roman period (ca. 300,000 B.C.-A.D.
          4th century).
        </p>
        <p>View of a gallery with four Monet paintings</p>
      </div>
      <div>
        <h3>European Paintings</h3>
        <p>
          The Met's celebrated European Paintings collection encompasses more
          than 2,500 works of art from the thirteenth through the early
          twentieth century.
        </p>
        <p>
          A large, long, sunlit interior courtyard for large European
          sculptures.
        </p>
      </div>
      <div>
        <h3>European Sculpture and Decorative Arts</h3>
        <p>
          The 50,000 objects in the Museum's comprehensive collection of
          European sculpture and decorative arts reflect the development of a
          number of art forms in Western European countries from the early
          fifteenth through the early twentieth century.
        </p>
        <p>
          A very large gallery enclosed by a colonnade and filled with with
          stone sculptures from ancient Rome lit by natural sunlight.
        </p>
      </div>
      <div>
        <h3>Greek and Roman Art</h3>
        <p>
          The Museum's collection of Greek and Roman art comprises more than
          30,000 works ranging in date from the Neolithic period (ca. 4500 B.C.)
          to the time of the Roman emperor Constantine's conversion to
          Christianity in A.D. 312.
        </p>
        <p>
          A room from Damascus decorated with gilded dark wood paneling, low
          dark red velvet covered cushions, and a red and white stone floor.
        </p>
      </div>
      <div>
        <h3>Islamic Art</h3>
        <p>
          The Met's collection of Islamic art is one of the most comprehensive
          in the world and ranges in date from the seventh to the twenty-first
          century. Its more than 15,000 objects reflect the great diversity and
          range of the cultural traditions from Spain to Indonesia.
        </p>
        <p>
          A small, sunlit, two-story octagonal interior courtyard in the middle
          of the Museum wing for the Robert Lehman Collection.
        </p>
      </div>
      <div>
        <h3>The Robert Lehman Collection</h3>
        <p>
          The Robert Lehman Collection is one of the most distinguished
          privately assembled art collections in the United States. Robert
          Lehman's bequest to The Met is a remarkable example of
          twentieth-century American collecting.
        </p>
        <p>
          A very large gallery with a dark stone floor and central arcades
          subdividing the space for medieval Christian sculptures and church
          pieces
        </p>
      </div>
      <div>
        <h3>Medieval Art and The Cloisters</h3>
        <p>
          The Museum's collection of medieval and Byzantine art is among the
          most comprehensive in the world, encompassing the art of the
          Mediterranean and Europe from the fall of Rome to the beginning of the
          Renaissance.
        </p>
        <p>
          Alicja Kwade's Parapivot installation on the roof of The Met, with the
          New York City skyline in the background
        </p>
      </div>
      <div>
        <h3>Modern and Contemporary Art</h3>
        <p>
          The Met's engagement with art from 1890 to today includes the
          acquisition and exhibition of works in a range of media, spanning
          movements in modernism to contemporary practices from across the
          globe.
        </p>
        <p>
          A close-up view looking up at a huge brass pipe organ in a brightly
          lit gallery with a high, vaulted ceiling
        </p>
      </div>
      <div>
        <h3>Musical Instruments</h3>
        <p>
          The Museum's collection of musical instruments includes approximately
          5,000 examples from six continents and the Pacific Islands, dating
          from about 300 B.C. to the present.
        </p>
      </div>
      <div>
        <h3>Oceanic Art in The Michael C. Rockefeller Wing</h3>
        <p>
          The expansive region of Oceania covers over a third of the Earth's
          surface and is home to some 1,800 different cultures and a
          kaleidoscopic range of artistic traditions. The Met's collection of
          Oceanic art comprises over 2,800 works that present the rich history
          of creative expression and innovation that is emblematic of the
          Pacific islands.
        </p>
      </div>
      <div>
        <h3>Photographs</h3>
        <p>
          Established as an independent curatorial department in 1992, The Met's
          Department of Photographs houses a collection of more than 75,000
          works spanning the history of photography from its invention in the
          1830s to the present.
        </p>
        <p>
          Photographs displayed in square frames hang on a white wall. More
          photography is displayed inside a glass case in the center of the
          room.
        </p>
      </div>
    </>
  );
};
