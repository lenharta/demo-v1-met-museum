import { useContext } from "react";
import { AppStateContext } from "../providers/AppProvider";

export default function useAppState() {
  return useContext(AppStateContext);
}
