import { TheMetLogo } from "../../assets";
import { Link } from "react-router-dom";

export default function MetLogoLink() {
  return (
    <div className="TheMetLink">
      <Link to="/">
        <TheMetLogo />
      </Link>
    </div>
  );
}
