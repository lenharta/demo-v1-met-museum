import Icon from "../../assets/Icon";

export const handleIconDisplay = (checked?: boolean) => {
  if (checked === undefined) return null;
  if (checked) return <Icon name="CheckboxCheck" />;
  return <Icon name="CheckboxUncheck" />;
};

export default function CheckboxItem({
  label,
  checked,
  onChange,
}: {
  label: React.ReactNode;
  checked: boolean;
  onChange: (checked: boolean, event: React.MouseEvent) => void;
}) {
  return (
    <div
      className="CheckboxItem"
      onClick={(event) => {
        onChange(!checked, event);
        const currntTgt = event.currentTarget as HTMLDivElement;
        const buttonTgt = currntTgt.querySelector(".CheckboxItem_btnbox");
        (buttonTgt as HTMLButtonElement).focus();
      }}
    >
      <button
        role="checkbox"
        aria-checked={checked}
        className="CheckboxItem_buttonbox"
      >
        {handleIconDisplay(!checked)}
      </button>

      <div className="CheckboxItem_labelbox">
        <>{label}</>
      </div>
    </div>
  );
}
