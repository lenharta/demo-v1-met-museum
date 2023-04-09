import Icon from "../../assets/Icon";

const toolIconLookup = {
  ["info"]: <Icon name="StatusInfoOutline" />,
  ["close"]: <Icon name="CloseOutline" />,
};

type ToolButtonProps<T> = {
  type: keyof typeof toolIconLookup;
  onClick: (value: T) => void;
  option: { value: T };
  value: T;
};

export const ToolButton = <T extends {}>({
  onClick,
  option,
  type,
  value,
}: ToolButtonProps<T>) => {
  return (
    <div className="ToolButton-box">
      <button
        className="ToolButton"
        onClick={() => {
          if (option.value === value) return;
          return onClick(option.value);
        }}
      >
        {toolIconLookup[type]}
      </button>
    </div>
  );
};
