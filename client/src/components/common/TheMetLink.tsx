import { Link } from "react-router-dom";
import { TheMetLogo } from "../../assets";

export const TheMetLink = ({ url }: { url: string }) => {
  return (
    <Link to={url ?? "/"} className="TheMetLink">
      <TheMetLogo />
    </Link>
  );
};
