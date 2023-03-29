import { createContext, useContext } from "react";
import { ProviderProps } from "../config";
import useAppStateReducer, {
  AppStateReducerReturnType,
} from "../reducers/useAppStateReducer";

export const AppStateContext = createContext(
  {} as Partial<AppStateReducerReturnType[0]>
);
export const AppDispatchContext = createContext(
  {} as Partial<AppStateReducerReturnType[1]>
);

export default function AppProvider({ children }: ProviderProps) {
  return (
    <AppStateContext.Provider value={useAppStateReducer()[0]}>
      <AppDispatchContext.Provider value={useAppStateReducer()[1]}>
        <>{children}</>
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

export function useAppDispatch() {
  return useContext(AppDispatchContext);
}
