import {
  Fragment,
  RefObject,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import Icon from "../../assets/Icon";

enum KEYCODES {
  ESCAPE = "Escape",
  ENTER = "Enter",
}

export function useDismissible<T extends {}>() {
  const [isMounted, isMountedSet] = useState<T | null>(null);
  const actions = {
    onOpen: (value: T) => isMountedSet(value),
    onClose: (value: T) => isMountedSet(value),
  };

  return {
    actions,
    isMounted,
  } as const;
}

// [$] useImperativeHandle() & useForwardRef() to handle modal focus and keyboard close.
// const useBodyRoot = () => {};
// export const ModalTwo = forwardRef(function ModalTwo<T>({...props}, ref: T) {
//  const modalRef = useRef(null);
//  useImperativeHandle(ref, () => {})
// });

function accessLocalTheme<T>(connection: Storage) {
  const localStore = connection.getItem("localStore");
  return JSON.parse(String(localStore)) as T;
}

export default function Modal({ content }: { content: React.ReactNode }) {
  const { actions, isMounted } = useDismissible();
  const { onClose, onOpen } = actions;
  const modalRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    modalRef.current?.focus();
    console.log(modalRef.current?.getBoundingClientRect());
  }, []);

  const onKeyDownEvent = (event: React.KeyboardEvent) => {
    console.log(event.code);
    if (event.code === KEYCODES.ESCAPE) return onClose(false);
  };

  return (
    <div className={`ModalContainer mode--light`}>
      <button onClick={() => onOpen(true)}>Show</button>
      {!isMounted ? (
        <Fragment />
      ) : (
        createPortal(
          <>
            <div className="ModalFilter" />
            <div className="ModalContent">
              <button
                ref={modalRef}
                className="ModalButton"
                data-mounted={isMounted}
                onClick={() => onClose(false)}
                onKeyDown={onKeyDownEvent}
              >
                <Icon name="CloseFill" />
              </button>
              {content}
            </div>
          </>,
          document.getElementById("portal") as HTMLElement
        )
      )}
    </div>
  );
}
