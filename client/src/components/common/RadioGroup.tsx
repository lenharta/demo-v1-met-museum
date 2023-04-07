import { useState } from "react";
import Icon from "../../assets/Icon";

export function RadioIcon({ checked }: { checked?: boolean }) {
  if (checked === true) return <Icon name="RadioChecked" />;
  return <Icon name="RadioUnchecked" />;
}

export default function RadioGroup<T extends {}>({
  group,
  name,
  options,
  onChange,
  value,
}: {
  group: string;
  name?: string;
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
            onChange={() => onChange}
            onKeyDown={(evt: React.KeyboardEvent) => {
              if (evt.code === "Enter") onChange;
            }}
          />
          <RadioIcon checked={value === option.value} />
          <div className="textbox">{option.text}</div>
        </label>
      ))}
    </div>
  );
}
