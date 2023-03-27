import { createContext } from "react";
import useLocalConnection from "../hooks/useLocalConnection";
import useLocalState, { ReturnTypeUseLocalState } from "../hooks/useLocalState";

export const LocalStateContext = createContext({} as ReturnTypeUseLocalState);

function LocalProvider({ children }: { children: React.ReactNode }) {
  const localKey = "localStorageKey";
  const localConnection = window.localStorage;
  // window.localStorage.clear();
  const [localState, localStateDispatch] = useLocalState();
  const localStorage = useLocalConnection(
    localKey,
    localState,
    localConnection
  );

  console.log(localStorage);

  return (
    <LocalStateContext.Provider value={[localState, localStateDispatch]}>
      <>{children}</>
    </LocalStateContext.Provider>
  );
}
