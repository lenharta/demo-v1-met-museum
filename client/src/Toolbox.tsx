import { useEffect, useRef, useState } from "react";
import { tileNavLinks } from "./components/common/utils";
import TileLinkMenu from "./components/common/TileLinkMenu";

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

// ||| TESTING CONCEPTS

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

// const numbers = [4, 3, 1, 2];

// function compare(n1: number, n2: number) {
//   if (n1 % 2 === 0 && n2 % 2 !== 0) {
//     return -1;
//   }
//   if (n1 % 2 !== 0 && n2 % 2 === 0) {
//     return 1;
//   }
//   return 0;
// }
// numbers.sort(compare);
// numbers; // => [4, 2, 3, 1]

const Toolbox = () => {
  return (
    <div className="Toolbox">
      <h3>Toolbox</h3>
      <TestComponentLayoutEffect />
      <TileLinkMenu items={tileNavLinks} titleText="Navigation Menu" />
    </div>
  );
};

export default Toolbox;

export const MetCopyVisitPage = {
  visitGuidelines: {},
  parkingDirections: {},
  museumMap: {},
  accessibilty: {},
  // dinging: (),
};

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
