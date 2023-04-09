import { useId } from "react";

export function capitalizeString<T extends string>(string: T) {
  const cleaning = string.toLowerCase();
  const slug = cleaning.slice(1, string.length);
  const casing = cleaning.charAt(0).toUpperCase();
  return (casing + slug) as T;
}

export const requestClientRectSize = (id: string) => {
  const targetElementById = window.document.getElementById(id);
  if (!targetElementById) return;
  return targetElementById?.getBoundingClientRect();
};

export const requestRootElementSize = (): number => {
  const rootElement = window.document.getElementById("root");
  return Number(rootElement?.clientWidth);
};

export const formatElementKey = (deps: string[], index: string | number) => {
  const cleanDependencies = deps.join(":");
  const slugIndex = String(":" + index);
  return cleanDependencies + slugIndex;
};

export const useSimpleTimeout = async (cb: () => void, timeout?: number) => {
  return setTimeout(() => cb, timeout ?? 2000);
};

export function clxss<T extends {}>(key: keyof T, mods?: T) {}

// [$] USE: add value identifier on export
// e.g. #1 | button:r0:mode-light
// e.g. #2 | button:r0:mode-dark

export const useAccessibleIDs = <T extends {}>(identifiers: string[]) => {
  const uid = useId();
  return identifiers.map((value, index) => {
    if (!value) return null;
    return {
      [value]: `${value}-${uid}`,
    } as T;
  });
};
