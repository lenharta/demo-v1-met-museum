import { TextElementObject } from "../config";

export default function Label({ ...props }: TextElementObject) {
  if (props.hidden) return <p className={props.hidden}>{props.text}</p>;
  return (
    <label className="labelText" id={props.id}>
      {props.text}
    </label>
  );
}
