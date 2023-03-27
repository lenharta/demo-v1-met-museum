import { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import Icon from "../../../assets/Icon";

type ModalConfigObject = {
  isMounted?: boolean;
  title?: string;
  text?: string;
};

enum KEYCODES {
  ESCAPE = "Escape",
  ENTER = "Enter",
}

export function useDismissible() {
  const [isMounted, isMountedSet] = useState(false);
  const actions = {
    onOpen: () => isMountedSet(true),
    onClose: () => isMountedSet(false),
  };
  return [actions, isMounted] as const;
}

export function ModalContent({
  config,
  onClose,
}: {
  onClose: () => void;
  config: ModalConfigObject;
}) {
  if (!config.isMounted) return null;
  return (
    <div className="ModalContent">
      <button
        onClick={onClose}
        onKeyDown={(event) => {
          if (event.code === KEYCODES.ESCAPE) onClose();
        }}
      >
        <Icon name="CloseFill" />
      </button>

      <div className="contentbox">
        {!config.title ? null : <p className="line32">{config.title}</p>}
        {!config.text ? null : <p className="line18">{config.text}</p>}
      </div>
    </div>
  );
}

export default function Modal({
  config,
}: {
  config: Partial<ModalConfigObject>;
}) {
  const [{ onClose, onOpen }, isMounted] = useDismissible();
  return (
    <div className="Modal">
      <button onClick={onOpen}>Show {config.title}</button>

      {createPortal(
        <ModalContent onClose={onClose} config={{ ...config, isMounted }} />,
        document.body
      )}
    </div>
  );
}
