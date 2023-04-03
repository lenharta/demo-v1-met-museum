import { useState } from "react";
import Icon from "../../assets/Icon";

export function CheckboxIcon({ checked }: { checked: boolean }) {
  if (checked === false) return <Icon name="CheckboxUncheck" />;
  return <Icon name="CheckboxCheck" />;
}

export default function CheckboxGroup<T extends {}>({
  options,
  onChange,
  value,
}: {
  options: { value: T; text: string }[];
  onChange: (value: T) => void;
  value: T | null;
}) {
  return (
    <div className="ContainedInputGroup">
      {options.map((option, index) => (
        <label key={option.text + index} className="ContainedInputItem">
          <input
            type="checkbox"
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            onKeyDown={(event) => {
              if (event.code === "Enter") onChange(option.value);
            }}
          />
          <CheckboxIcon checked={value === option.value} />
          <div className="textbox">{option.text}</div>
        </label>
      ))}
    </div>
  );
}

export function TestComponentCheckboxGroup() {
  type TestTheme = "mode-dark" | "mode-light";
  const [mode, modeSet] = useState<TestTheme>("mode-light");
  return (
    <>
      <CheckboxGroup
        value={mode}
        onChange={modeSet}
        options={[
          { value: "mode-light", text: "Light Mode" },
          { value: "mode-dark", text: "Dark Mode" },
        ]}
      />
    </>
  );
}
