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
