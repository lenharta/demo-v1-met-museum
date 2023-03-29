import { Fragment, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AppState } from "../../../app/reducers/useAppStateReducer";
import Icon from "../../../assets/Icon";

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

// function handleModalEscape

function accessLocalTheme<T>(connection: Storage) {
  const localStore = connection.getItem("localStore");
  return JSON.parse(String(localStore)) as T;
}

export default function Modal({ content }: { content: React.ReactNode }) {
  const { actions, isMounted } = useDismissible();
  const { onClose, onOpen } = actions;
  const modalRef = useRef<HTMLButtonElement>(null);

  // const localStore = accessLocalTheme();

  if (isMounted) {
    modalRef.current;
  }

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
          document.body
        )
      )}
    </div>
  );
}
