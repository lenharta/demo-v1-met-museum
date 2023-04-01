import Icon from "../../../assets/Icon";

export function CheckboxIcon({ checked }: { checked: boolean }) {
  if (checked === false) return <Icon name="CheckboxUncheck" />;
  return <Icon name="CheckboxCheck" />;
}

export default function Checkbox<T>({
  option,
  onChange,
}: {
  option: { text: string; value: T };
  onChange: (value: T) => void;
}) {
  return (
    <label className="ContainedInputItem">
      <input
        type="checkbox"
        checked={option.value ? true : false}
        aria-checked={option.value ? true : false}
        onChange={() => onChange(option.value)}
        onKeyDown={(event: React.KeyboardEvent) => {
          if (event.code === "Enter") onChange(option.value);
        }}
      />
      <CheckboxIcon checked={option.value ? true : false} />
      <div className="textbox">{option.text}</div>
    </label>
  );
}

// [$] OLD VERSION = REMOVE AFTER TEST

// import Icon from "../../assets/Icon";

// export const handleIconDisplay = (checked?: boolean) => {
//   if (checked === undefined) return null;
//   if (checked) return <Icon name="CheckboxCheck" />;
//   return <Icon name="CheckboxUncheck" />;
// };

// export default function CheckboxItem({
//   label,
//   checked,
//   onChange,
// }: {
//   label: React.ReactNode;
//   checked: boolean;
//   onChange: (checked: boolean, event: React.MouseEvent) => void;
// }) {
//   return (
//     <div
//       className="CheckboxItem"
//       onClick={(event) => {
//         onChange(!checked, event);
//         const currntTgt = event.currentTarget as HTMLDivElement;
//         const buttonTgt = currntTgt.querySelector(".CheckboxItem_btnbox");
//         (buttonTgt as HTMLButtonElement).focus();
//       }}
//     >
//       <button
//         role="checkbox"
//         aria-checked={checked}
//         className="CheckboxItem_buttonbox"
//       >
//         {handleIconDisplay(!checked)}
//       </button>

//       <div className="CheckboxItem_labelbox">
//         <>{label}</>
//       </div>
//     </div>
//   );
// }
