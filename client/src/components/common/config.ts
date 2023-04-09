export const EXPIRATION_TOAST = 2000;
export const EXPIRATION_LOADER = 2000;

export type CommonInputProps = {
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

export type CommonImageProps = {
  onClick(event: React.ChangeEvent): void;
  onError(): void;
  altText: string;
  srcUrl: string;
  width: number;
  height: number;
  decoding: "async" | "sync" | "auto";
  crossOrigin: string | null;
  referrerPolicy: string;
  srcset: string;
  name: string;
  /** Sets or retrieves whether the image is a server-side image map. */
  isMap: boolean;
  useMap: string;
  /** Retrieves whether the object is fully loaded. */
  readonly complete: boolean;
  /** Sets or retrieves the policy for loading image elements that are outside the viewport. */
  loading: "eager" | "lazy";
  /** Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map. */
  vspace: number;
};
