import { createContext, useState } from "react";
import useLocalConnection from "../hooks/useLocalConnection";

export type LocalState = {
  mode: "mode-dark" | "mode-light";
  avatar: "default" | "rocket" | "zombie";
};

export function useLocalState() {
  return useState<LocalState>({
    mode: "mode-dark",
    avatar: "default",
  });
}

export type ReturnTypeUseLocalState = ReturnType<typeof useLocalState>;
export const LocalStateContext = createContext({} as ReturnTypeUseLocalState);

export default function LocalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const localKey = "localStorageKey";
  const localConnection = window.localStorage;

  const [localState, localStateDispatch] = useLocalState();
  const localStorage = useLocalConnection(
    localKey,
    localState,
    localConnection
  );

  // window.localStorage.clear();
  console.log(localStorage);

  return (
    <LocalStateContext.Provider value={[localState, localStateDispatch]}>
      <>{children}</>
    </LocalStateContext.Provider>
  );
}
