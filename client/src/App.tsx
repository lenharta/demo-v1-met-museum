import { Outlet } from "react-router-dom";
import { State, useStateStore } from "./app/StateStore";
import { requestClientRectSize } from "./utils";
import { useLayoutEffect, useRef } from "react";

const useComposeJSON = <T extends {}>(data: T) => {
  return JSON.stringify(data) as string;
};
const useParseJSON = <T extends {}>(data: T) => {
  return JSON.parse(JSON.stringify(data)) as T;
};
const useLocalTheme = (state: Partial<State>, connection: Storage) => {
  const localThemeKey = "LocalThemeKey";
  if (!connection.getItem(localThemeKey)) {
    return connection.setItem(localThemeKey, JSON.stringify(state));
  }
  // console.log(connection);
};

const useAnimationSnapshot = (animation: string, elementId: string) => {
  const element = window.document.getElementById(elementId);
  if (!element) return;
  return {
    data: requestClientRectSize(elementId),
    element: element,
  } as const;
};

export const calculateTranslateX = (elapsed: number) => {
  const count = Math.min(0.1 * elapsed, 200);
  return {
    transformText: `translateX(${count}px)`,
    count: count,
  };
};
export const calculateTranslateY = (elapsed: number) => {
  const count = Math.min(0.1 * elapsed, 200);
  return {
    transformText: `translateY(${count}px)`,
    count: count,
  };
};

const useSimpleTimeout = async (cb: () => void, timeout?: number) => {
  return setTimeout(() => cb, timeout ?? 2000);
};

function App() {
  const state = useStateStore();
  const testAnimate = useAnimationSnapshot(
    "testAnimateName",
    "testAnimateElement"
  );

  console.log(useSimpleTimeout(() => console.log("Timeout Complete!"), 2000));

  // console.log(testAnimate?.data);
  // console.log(testAnimate?.element);
  const ANIMATION_TIMEOUT = 2000;
  const inTransitionRef = useRef<"inTransition" | undefined>("inTransition");
  const startTimeRef = useRef<number>(0);

  useLayoutEffect(() => {
    if (inTransitionRef.current) startTimeRef.current++;
    if (startTimeRef.current > 100) inTransitionRef.current = undefined;
    console.log(inTransitionRef.current);
    console.log(startTimeRef.current);
  }, []);

  return (
    <div className={`MetMuseumApp`}>
      <Outlet />
    </div>
  );
}
export default App;
