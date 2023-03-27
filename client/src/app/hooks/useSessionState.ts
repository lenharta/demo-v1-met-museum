import { useState } from "react";

export type SessionState = {
  isUniqueSession: boolean;
};

export default function useSessionState() {
  return useState<SessionState>({
    isUniqueSession: true,
  });
}

export type ReturnTypeUseSessionState = ReturnType<typeof useSessionState>;
