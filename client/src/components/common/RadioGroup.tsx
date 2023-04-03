import { useState } from "react";
import Icon from "../../assets/Icon";

export function RadioIcon({ checked }: { checked?: boolean }) {
  if (checked === true) return <Icon name="RadioChecked" />;
  return <Icon name="RadioUnchecked" />;
}

export default function RadioGroup<T extends {}>({
  group,
  options,
  onChange,
  value,
}: {
  group: string;
  options: { value: T; text: string }[];
  onChange: (value: T) => void;
  value: T | null;
}) {
  return (
    <div className="ContainedInputGroup">
      {options.map((option, index) => (
        <label key={group + index} className="ContainedInputItem">
          <input
            type="radio"
            radioGroup={group}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            onKeyDown={(evt: React.KeyboardEvent) => {
              if (evt.code === "Enter") onChange(option.value);
            }}
          />
          <RadioIcon checked={value === option.value} />
          <div className="textbox">{option.text}</div>
        </label>
      ))}
    </div>
  );
}

export function TestComponentRadioGroup() {
  type TestTheme = "mode-dark" | "mode-light";
  const [mode, modeSet] = useState<TestTheme>("mode-light");
  const groupID = "theme_mode_group";

  return (
    <>
      <RadioGroup
        value={mode}
        group={groupID}
        onChange={modeSet}
        options={[
          { value: "mode-light", text: "Light Mode" },
          { value: "mode-dark", text: "Dark Mode" },
        ]}
      />
    </>
  );
}
