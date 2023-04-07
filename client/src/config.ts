import { CSSProperties } from "react";

export const DEFAULT_TERMS_AND_SERVICE = {
  title: "Terms & Service Agreement",
  click: "By clicking 'accept', you are agreeing to our terms of service.",
  check: "By checking this box, you are agreeing to our terms of service.",
};

export type ConfigInput = {
  id: string;
  autocomplete: string;
  capture: string;
  checked: boolean;
  defaultChecked: boolean;
  defaultValue: string;
  disabled: boolean;
  height: number;
  max: string;
  maxLength: number;
  min: string;
  minLength: number;
  /** Sets or retrieves the Boolean value indicating whether multiple items can be selected from a list. */
  multiple: boolean;
  name: string;
  /** Gets or sets a string containing a regular expression that the user's input must match. */
  pattern: string;
  placeholder: string;
  required: boolean;
  selectionDirection: "forward" | "backward" | "none" | null;
  /** Gets or sets the end position or offset of a text selection. */
  selectionEnd: number | null;
  /** Gets or sets the starting position or offset of a text selection. */
  selectionStart: number | null;
  size: number;
  src: string;
  step: string;
  type: string;
  useMap: string;
  /** Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting. */
  readonly validationMessage: string;
  /** Returns a  ValidityState object that represents the validity states of an element. */
  readonly validity: ValidityState;
  /** Returns the value of the data at the cursor's current position. */
  value: string;
  /** Returns a Date object representing the form control's value, if applicable; otherwise, returns null. Can be set, to change the value. Throws an "InvalidStateError" DOMException if the control isn't date- or time-based. */
  valueAsDate: Date | null;
  /** Returns the input field value as a number. */
  valueAsNumber: number;
  width: number;
};
export type ConfigImage = {
  /** Sets or retrieves a text alternative to the graphic. */
  alt: string;
  /** Retrieves whether the object is fully loaded. */
  readonly complete: boolean;
  crossOrigin: string | null;
  readonly currentSrc: string;
  decoding: "async" | "sync" | "auto";
  /** Sets or retrieves the height of the object. */
  height: number;
  /** Sets or retrieves whether the image is a server-side image map. */
  isMap: boolean;
  /** Sets or retrieves the policy for loading image elements that are outside the viewport. */
  loading: "eager" | "lazy";
  name: string;
  referrerPolicy: string;
  sizes: string;
  src: string;
  srcset: string;
  /** Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map. */
  useMap: string;
  vspace: number;
  /** Sets or retrieves the width of the object. */
  width: number;
};

export type ConfigCheckbox = {};
export type ConfigButton = {};

export type ConfigCustomProps = {
  note: { text: string; id: string };
  label: { text: string; id: string };
  theme: { mode: "mode-light" | "mode-dark" };
  variant: "default" | "skeleton" | "action" | "delete";
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
  width: number;
  height: number;
  dimension2d: { height: number; width: number };
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

/**
 * [$]: AtomLineElement
 * SVGLineElement (MDN) - https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line
 * @param {string | number} [y1=0] - Defines the y-axis coordinate of the line starting point.
 * @param {string | number} [x1=0] - Defines the x-axis coordinate of the line starting point.
 * @param {string | number} [y2=50] - Defines the y-axis coordinate of the line ending point.
 * @param {string | number} [x2=100] - Defines the x-axis coordinate of the line ending point.
 * */

export type AtomLineElement = {
  y1: number | string;
  x1: number | string;
  y2: number | string;
  x2: number | string;
};

/**
 * [$]: AtomPolygonElement
 * SVGPolygonElement (MDN) - https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygon
 * @param {CSSProperties["stroke"]} stroke - (required) - if not provided line will not appear
 * */

export type AtomPolygonElement = {
  y1: number | string;
  x1: number | string;
  y2: number | string;
  x2: number | string;
  stroke: CSSProperties["stroke"];
};

/**
 * [$]: AtomRectangleElement
 * SVGLineElement (MDN) - https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rectangle
 * @param {number | string} [height="100"] - (optional/default) describes the height of the rectangle.
 * @param {number | string} [width="100"] - (optional/default) describes the height of the rectangle. If square, width overrides undefined height.
 * @param {number | string} [rx=] - (optional) The horizontal corner radius of the rect. Defaults to ry if it is specified.
 * @param {number | string} [ry=] - (optional) The vertical corner radius of the rect. Defaults to rx if it is specified.
 * @param {number | string} [x=] - (optional) describes the coordinate-x position for the rectangle.
 * @param {number | string} [y=] - (optional) describes the coordinate-y position for the rectangle.
 * */

export type AtomRectangleElement = {
  height: number | string;
  width: number | string;
  x: number | string;
  y: number | string;
  rx: number | string;
  ry: number | string;
};

/**
 * [$]: AtomCircleElement
 * SVGLineElement (MDN) - https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle
 * @param {number | string} cx - The x-axis coordinate of the center of the circle.
 * @param {number | string} cy - The y-axis coordinate of the center of the circle.
 * @param {number | string} r  - The radius of the circle. A value lower or equal to zero disables rendering of the circle.
 * */

export type AtomCircleElement = {
  cx: number | string;
  cy: number | string;
  r: number | string;
};

// ||| CONFIG DEFAULTS
export const DEFAULT_DIMENSION_HEIGHT = { height: 100 };
export const DEFAULT_DIMENSION_WIDTH = { width: 100 };
export const DEFAULT_DIMENSION_OBJECT: ConfigCustomProps["dimension2d"] = {
  ...DEFAULT_DIMENSION_HEIGHT,
  ...DEFAULT_DIMENSION_WIDTH,
};

export type ConfigPointYKey = "y1" | "y2";
export type ConfigPointXKey = "x1" | "x2";
export type ConfigPointYObj = Record<ConfigPointYKey, number>;
export type ConfigPointXObj = Record<ConfigPointXKey, number>;
export type ConfigAxisPointObj = ConfigPointYObj & ConfigPointXObj;
export type ConfigAxisPointMap = ConfigAxisPointObj[];

export const DEFAULT_X_AXIS_POINT_OBJECT: Partial<ConfigAxisPointObj> = {
  x1: 100,
  x2: 100,
};
export const DEFAULT_Y_AXIS_POINT_OBJECT: Partial<ConfigAxisPointObj> = {
  y1: 100,
  y2: 100,
};

export const DEFAULT_POINT_OBJECT: Partial<ConfigAxisPointObj> = {
  ...DEFAULT_X_AXIS_POINT_OBJECT,
  ...DEFAULT_Y_AXIS_POINT_OBJECT,
};
