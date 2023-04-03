import { createContext, useContext, useReducer } from "react";
import { Outlet } from "react-router-dom";
import { AppState } from "./app/config";

const appStateReducer = <T extends {}>() => {
  const initialState: AppState<T> = {
    data: undefined,
    isError: undefined,
    isLoading: undefined,
    isMenuOpen: undefined,
    isModalOpen: undefined,
    isSession: undefined,
    isThemeMode: undefined,
    isThemeAvatar: undefined,
    isCurrentSession: undefined,
  };

  const [appState, appDispatch] = useReducer(
    (current: AppState<T>, update: Partial<AppState<T>>) => ({
      ...current,
      ...update,
    }),
    initialState
  );
  return [appState, appDispatch] as const;
};

export type ReturnAppStateReducer = ReturnType<typeof appStateReducer>;
export type ReturnAppStateCTX = Partial<ReturnAppStateReducer>[0];
export type ReturnAppDisptchCTX = Partial<ReturnAppStateReducer>[1];

export const AppStateCTX = createContext({} as ReturnAppStateCTX);
export const AppDispatchCTX = createContext({} as ReturnAppDisptchCTX);

export const AppStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const reducer = appStateReducer();
  return (
    <AppStateCTX.Provider value={reducer[0]}>
      <AppDispatchCTX.Provider value={reducer[1]}>
        <>{children}</>
      </AppDispatchCTX.Provider>
    </AppStateCTX.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateCTX);
};
export const useAppDispatch = () => {
  return useContext(AppDispatchCTX);
};

function App() {
  return (
    <AppStateProvider>
      <div className={`MetMuseumApp`}>
        <Outlet />
      </div>
    </AppStateProvider>
  );
}
export default App;

// function EditPerson<
//   T extends {
//     first: string;
//     last: string;
//   }
// >({ data }: { data: T }) {
//   const [person, updateFields] = useReducer(
//     (current: T, update: Partial<T>) => ({
//       ...current,
//       ...update,
//     }),
//     data
//   );
//   return (
//     <div>
//       <input
//         type="text"
//         value={person.first}
//         onChange={(event) => {
//           const target = event.target as typeof event.target;
//           updateFields({ ...person, first: target.value });
//         }}
//       />
//     </div>
//   );
// }
