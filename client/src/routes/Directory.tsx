import { Link } from "react-router-dom";
import { EmptyStateBoundary, Page, PageHero } from "../components";
import Icon from "../assets/Icon";
import { useAxiosFetch } from "./Home";
import { MET_MUSEUM_API_ENDPOINTS } from "../app/api/config";
import { State } from "../app/StateStore";

const DepartmentTabListItem = ({
  displayName,
  departmentId,
}: {
  displayName: string;
  departmentId: number;
}) => {
  if (!departmentId) return null;
  return (
    <li className="TabLinkListItem">
      <Link to="/">
        <span>{displayName}</span>
        <Icon name="ArrowRight" />
      </Link>
    </li>
  );
};

const DepartmentTabList = ({ data }: { data: State["data"] }) => {
  if (!data?.departments) return null;
  return (
    <ul className="TabLinkList">
      {data.departments.map(({ departmentId, displayName }) => (
        <DepartmentTabListItem
          key={departmentId}
          departmentId={departmentId}
          displayName={displayName}
        />
      ))}
    </ul>
  );
};

const AppSplashScreen = () => {
  return (
    <div className="AppSplashScreen splash">
      <h3>App Loading...</h3>
    </div>
  );
};
const PageSplashScreen = () => {
  return (
    <div className="PageSplashScreen">
      <h3>Page Loading...</h3>
    </div>
  );
};

const Directory = () => {
  const { state, dispatch } = useAxiosFetch(
    MET_MUSEUM_API_ENDPOINTS["departments"]
  );
  return (
    <Page hero={<PageHero title="Directory" />}>
      <EmptyStateBoundary
        error={state.error}
        loading={state.loading}
        element={<DepartmentTabList data={state.data} />}
      />
      {/* <ServerMessage loading={state.loading} text="Loading..." /> */}
    </Page>
  );
};
export default Directory;
