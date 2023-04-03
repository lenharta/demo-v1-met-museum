import Icon, { IconType } from "../../assets/Icon";

type EventConfig = React.MouseEvent | React.KeyboardEvent;

export function ButtonIcon<T extends IconType>({ icon }: { icon?: T }) {
  if (!icon) return <Icon name="ArrowRight" />;
  return <Icon name={icon} />;
}

function handleLayout(layout: React.ReactNode[], reverse: boolean = false) {
  if (reverse) return layout.reverse();
  return layout;
}

export default function Button<T extends {}>({
  config,
  option,
  onClick,
}: {
  config?: { icon?: IconType; variant?: "default"; reverse?: boolean };
  onClick: (value: T, evt: EventConfig) => void;
  option: { text: string; value: T };
}) {
  return (
    <button
      onKeyDown={(evt) => {
        if (evt.code === "Enter") onClick(option.value, evt);
      }}
      onClick={(evt) => {
        onClick(option.value, evt);
      }}
    >
      {handleLayout(
        [option.text, <ButtonIcon icon={config?.icon} />],
        config?.reverse
      )}
    </button>
  );
}
