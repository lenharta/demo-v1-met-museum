import { createContext, useContext, useReducer } from "react";
import {
  MET_MUSEUM_API_DEPARTMENT_OBJECT,
  MET_MUSEUM_API_EXHIBIT_OBJECT,
} from "./api/config";

type MetMuseumDepartment = MET_MUSEUM_API_DEPARTMENT_OBJECT;
type MetMuseumExhibit = MET_MUSEUM_API_EXHIBIT_OBJECT;

export type MetMuseumResponses = {
  departments?: MetMuseumDepartment[];
  department?: MetMuseumDepartment;
  exhibits?: MetMuseumExhibit[];
  exhibit?: MetMuseumExhibit;
};

export type isThemeMode = "mode-light" | "mode-dark";
export type isThemeAvatar = "default" | "robot" | "zombie";

export type State = {
  data?: MetMuseumResponses;
  isThemeMode: isThemeMode;
  isThemeAvatar: isThemeAvatar;
  statusText?: string;
  statusCode?: string;
  loading?: "loading";
  error?: Error;
};

const useStateStoreReducer = () => {
  const initialState: State = {
    data: undefined,
    isThemeMode: "mode-dark",
    isThemeAvatar: "default",
    statusText: undefined,
    statusCode: undefined,
    loading: undefined,
    error: undefined,
  };
  return useReducer(
    (current: State, update: Partial<State>) => ({
      ...current,
      ...update,
    }),
    initialState
  );
};

const StateStoreCTX = createContext(
  {} as ReturnType<typeof useStateStoreReducer>[0]
);
const StateDispatchCTX = createContext(
  {} as ReturnType<typeof useStateStoreReducer>[1]
);

const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useStateStoreReducer();
  return (
    <StateStoreCTX.Provider value={state}>
      <StateDispatchCTX.Provider value={dispatch}>
        <>{children}</>
      </StateDispatchCTX.Provider>
    </StateStoreCTX.Provider>
  );
};

export const useStateStore = () => {
  return useContext(StateStoreCTX);
};
export const useStateDispatch = () => {
  return useContext(StateDispatchCTX);
};

export default StateProvider;
