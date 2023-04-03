import { AriaAttributes, ChangeEvent, MouseEvent } from "react";

export type CommonProps<
  Button extends HTMLButtonElement,
  Input extends HTMLButtonElement,
  Div extends HTMLDivElement
> = {
  id?: string;
  text?: string;
  name?: string;
  note?: { text: string; id: string };
  label?: { text: string; id: string };
  hidden?: "visuallyHidden";
  descript?: string;
  onClickEvent?: (event: MouseEvent<Input | Button | Div>) => void;
  onChangeEvent?: (event: ChangeEvent<Input | Button>) => void;
  onChangeValue?: (value: ChangeEvent<Input>) => void;
  onKeyDownEvent?: (event: KeyboardEvent) => void;
};
