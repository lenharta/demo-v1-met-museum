import Icon from "../../assets/Icon";

export default function ButtonTile({
  title,
  descript,
  onClick,
}: {
  title: string;
  descript: string;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} className="button button-tile">
      <div className="copy-box">
        <h3>{title}</h3>
        <p>{descript}</p>
      </div>
      <Icon name="ArrowRight" />
    </button>
  );
}
