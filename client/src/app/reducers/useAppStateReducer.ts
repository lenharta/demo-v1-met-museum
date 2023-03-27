import { useReducer } from "react";

export type AppState = {
  error?: Error;
  errorText?: string;
  loading?: boolean;
};

export type AppStateAction =
  | { type: "SET_ERROR"; payload: Error }
  | { type: "SET_ERRORTEXT"; payload: string }
  | { type: "SET_LOADING"; payload: boolean };

export default function useAppStateReducer() {
  const initialState: AppState = {
    error: undefined,
    errorText: undefined,
    loading: false,
  };

  const appStateReducer = (
    state: AppState = initialState,
    action: AppStateAction
  ) => {
    switch (action.type) {
      case "SET_ERROR":
        return { ...state, error: action.payload };
      case "SET_ERRORTEXT":
        return { ...state, errorText: action.payload };
      case "SET_LOADING":
        return { ...state, loading: action.payload };
      default:
        return { ...state };
    }
  };

  const reducer = useReducer(appStateReducer, initialState);
  return reducer;
}

export type AppStateReducerReturnType = ReturnType<typeof useAppStateReducer>;
