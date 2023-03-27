export default function PageHero({
  action,
  title,
  text,
}: {
  text?: string;
  title?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="PageHero">
      {!title ? null : <h1 className="line52 p-regular">{title}</h1>}
      {!text ? null : <p className="line18 p-medium">{title}</p>}
      <div className="actionbox">
        <>{!action ? null : action}</>
      </div>
    </div>
  );
}
