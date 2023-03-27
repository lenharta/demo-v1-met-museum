import { useState } from "react";

export type LocalState = {
  mode: "mode-dark" | "mode-light";
  avatar: "default" | "rocket" | "zombie";
};

export default function useLocalState() {
  return useState<LocalState>({
    mode: "mode-dark",
    avatar: "default",
  });
}

export type ReturnTypeUseLocalState = ReturnType<typeof useLocalState>;
