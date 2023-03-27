import { useContext } from "react";
import { AppDispatchContext } from "../providers/AppProvider";

export default function useAppDispatch() {
  return useContext(AppDispatchContext);
}
