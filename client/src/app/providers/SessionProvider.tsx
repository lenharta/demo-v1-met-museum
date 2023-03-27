import { createContext } from "react";
import useLocalConnection from "../hooks/useLocalConnection";
import useSessionState, {
  ReturnTypeUseSessionState,
} from "../hooks/useSessionState";

export const SessionStateContext = createContext(
  {} as ReturnTypeUseSessionState
);

function SessionProvider({ children }: { children: React.ReactNode }) {
  const sessionKey = "SessionStorageKey";
  const sessionConnection = window.sessionStorage;
  // window.sessionStorage.clear();
  const [sessionState, sessionStateDispatch] = useSessionState();
  const sessionStorage = useLocalConnection(
    sessionKey,
    sessionState,
    sessionConnection
  );

  console.log(sessionStorage);

  return (
    <SessionStateContext.Provider value={[sessionState, sessionStateDispatch]}>
      <>{children}</>
    </SessionStateContext.Provider>
  );
}
