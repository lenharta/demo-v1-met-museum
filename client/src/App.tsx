import { Link, Outlet } from "react-router-dom";
import { isThemeMode, useStateStore } from "./app/StateStore";

export const MobileMenu = () => {
  return (
    <div className="MobileMenu">
      <nav>
        <ul>
          <li className="MobileMenu-tile">
            <Link to="/">Home</Link>
          </li>
          <li className="MobileMenu-tile">
            <Link to="/">Visit</Link>
          </li>
          <li className="MobileMenu-tile">
            <Link to="/">Events and Info</Link>
          </li>
          <li className="MobileMenu-tile">
            <Link to="/">Link Tab</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const onThemeModeChange = (mode: isThemeMode) => {
  const location = window.document.getElementById("root");
  if (location) return location.classList.add(mode);
  return;
};

function App() {
  const state = useStateStore();
  return (
    <>
      <Outlet />
    </>
  );
}
export default App;
