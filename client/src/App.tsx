import { createContext, useReducer } from "react";
import { Outlet } from "react-router-dom";

type AppState = {
  isLoading?: "isLoading";
  isThemeMode?: "mode--dark" | "mode--light";
  isInitializing?: "isInitializing";
  isCurrentSession?: "isCurrentSession";
  isErrorText?: string;
  isError?: Error;
};

const initAppState: AppState = {
  isCurrentSession: undefined,
  isError: undefined,
  isErrorText: undefined,
  isInitializing: "isInitializing",
  isLoading: undefined,
  isThemeMode: "mode--light",
};

export function appStateReducer<T extends AppState>(data: T) {
  const [appState, appDispatch] = useReducer(
    (current: T, update: Partial<T>) => ({
      ...current,
      ...update,
    }),
    data
  );
  return [appState, appDispatch] as const;
}

export enum STORAGEKEYS {
  local = "localStorage",
  session = "sessionStorage",
}

const AppStateContext = createContext(
  {} as ReturnType<typeof appStateReducer>[0]
);
const AppDispatchContext = createContext(
  {} as ReturnType<typeof appStateReducer>[1]
);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [appState, appDispatch] = appStateReducer(initAppState);
  return (
    <AppStateContext.Provider value={appState}>
      <AppDispatchContext.Provider value={appDispatch}>
        <>{children}</>
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

function useJSON() {
  function parseJSON<T>(data: T) {
    return JSON.parse(JSON.stringify(data));
  }
  function composeJSON<T>(data: T) {
    return JSON.stringify(data);
  }
  return {
    parseJSON,
    composeJSON,
  };
}

function useLocalConnection<T extends AppState>({
  config,
  data,
}: {
  config: { key: string; connection: Storage };
  data: T;
}) {
  const { connection, key } = config;
  const { parseJSON, composeJSON } = useJSON();

  const currentStorage = () => ({
    storage: connection.getItem(parseJSON(key)) as T,
  });
  const updateStorage = (value: T) => {
    return connection.setItem(key, composeJSON(value));
  };
  if (!connection.getItem(key)) {
    updateStorage(data);
  }

  const { storage } = currentStorage();

  if (data !== storage) {
    updateStorage(data);
  }

  return {
    current: storage,
    length: JSON.stringify(data).length,
    clear: () => connection.clear,
  };
}

function App() {
  const [appState] = appStateReducer(initAppState);

  const localStore = useLocalConnection({
    config: { key: "localStore", connection: window.localStorage },
    data: { isThemeMode: appState.isThemeMode },
  });

  const { isThemeMode } = localStore.current;

  return (
    <AppProvider>
      <div className={`MetMuseumApp ${isThemeMode ?? "mode--dark"}`}>
        <Outlet />
      </div>
    </AppProvider>
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
