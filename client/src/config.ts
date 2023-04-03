export const UtilityCopyData = {
  termsAndService: {
    title: "Terms & Service Agreement",
    click: "By clicking 'accept', you are agreeing to our terms of service.",
    check: "By checking this box, you are agreeing to our terms of service.",
  },
};

export type UtilityProps = {
  id: string;
  uid: string;
  name: string;
  text: string;
  title: string;
  note: { text: string; id: string };
  label: { text: string; id: string };
  theme: { mode: "mode-light" | "mode-dark" };
  status: "valid" | "invalid" | "misuse";

  isError: Error;
  isShown: "isShown";
  isHidden: "isHidden";
  colorText: React.CSSProperties["color"];
  colorFill: React.CSSProperties["fill"];
  colorBorder: React.CSSProperties["borderColor"];
  colorOutline: React.CSSProperties["outlineColor"];
  colorBackground: React.CSSProperties["backgroundColor"];
  colorValueHEXCODE: string[];
  colorValueRGBA: number[];
  colorValueHSLA: number[];
  positionX: { x: string };
  positionY: { y: string };
  positionZ: { z: string };
  coordinate2d: { x: string; y: string };
  coordinate3d: { x: string; y: string; z: string };

  CHECKBOX: {
    name: string;
    value: string;
    variant: "default" | "skeleton" | "action" | "delete";
    status: "isValid" | "isInvalid" | "isMisuse";
    label: { text: string; id: string };
    note: { text: string; id: string };
  };
};

export type BaseImageProps = {
  onClick(event: React.ChangeEvent): void;
  onError(): void;
  altText: string;
  source: string;
};

export type BaseLocationObject = {
  id: string;
  name: string;
  tagline: string;
  position: {
    coords: { latitude: number; longitude: number };
    coordsRelative: { N: string; W: string };
  };
  address: {
    city: { code: string; district: string; name: string };
    state: { code: string; country: string; name: string };
    street: { name: string; number: number; type: string };
  };
  images?: { [key: string]: string }[];
  hours?: { type: string; timeRange: number[] | null; label: string }[];
};
