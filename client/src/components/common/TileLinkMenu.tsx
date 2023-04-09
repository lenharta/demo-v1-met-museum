import { useState } from "react";
import { Link } from "react-router-dom";
import { formatElementKey } from "../../utils";

type TileLinkProps = { id: string; url: string; linkText: string };

export const TileLinkItem = ({ url, linkText, id }: Partial<TileLinkProps>) => {
  return (
    <li className="TileLinkItem">
      <Link className="line18 p-bold" to={url ?? "/"}>
        {linkText}
      </Link>
    </li>
  );
};

const TileLinkList = ({ items }: { items?: Partial<TileLinkProps>[] }) => {
  if (!items) return null;
  return (
    <ul className="TileLinkList">
      {items.map((item, index) => {
        if (!item.linkText) return null;
        const itemKey = formatElementKey([item.linkText], index);
        return <TileLinkItem key={itemKey} {...item} />;
      })}
    </ul>
  );
};

const TileLinkMenu = ({
  titleText = "Tile Link List",
  items = [
    { id: "link-1-id", url: "/", linkText: "Link Item 1" },
    { id: "link-2-id", url: "/", linkText: "Link Item 2" },
    { id: "link-3-id", url: "/", linkText: "Link Item 3" },
  ],
}: {
  titleText?: string;
  items?: Partial<TileLinkProps>[];
}) => {
  const [linkIndex, linkIndexSet] = useState(items[0].id);

  return (
    <div className="TileLinkMenu">
      <h3 className="line32 p-medium">{titleText}</h3>
      <TileLinkList items={items} />
    </div>
  );
};
export default TileLinkMenu;
