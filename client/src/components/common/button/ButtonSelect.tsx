export default function ButtonSelect<T extends {}>({
  options,
  value,
  onChange,
  group,
}: {
  options: { value: T; text: string }[];
  value: T | null;
  onChange: (value: T) => void;
  group: string;
}) {
  return (
    <div className="ButtonSelect">
      {options.map((option) => (
        <label className="ButtonSelect_label">
          <input
            type="text"
            name={group}
            className="ButtonSelect_input"
            onChange={() => onChange(option.value)}
            checked={value === option.value}
          />
          {option.text}
        </label>
      ))}
    </div>
  );
}
