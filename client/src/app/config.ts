export type AppStateTheme = "mode-dark" | "mode-light";
export type AppStateAvatar =
  | "avatar-paintbrush"
  | "avatar-castle"
  | "avatar-painting"
  | "avatar-pencil"
  | "avatar-sculpture"
  | "avatar-scroll"
  | "avatar-user";

export type AppState<T extends {}> = {
  isThemeMode: AppStateTheme;
  isThemeAvatar: AppStateAvatar;
  isCurrentSession?: "isCurrentSession";
  isHomeLocation?: "isHomeLocation";
  isModalOpen?: "isModalOpen";
  isMenuOpen?: "isMenuOpen";
  isSession?: "isSession";
  isLoading?: "isLoading";
  isError?: Error;
  data?: T[];
};

export type LocalState = {
  isUniqueVisit?: "isUniqueVisit";
  isCurrentSession?: "isCurrentSession";
  isThemeMode?: "mode-light" | "mode-dark";
};

export type LocalStore = {
  storeData: LocalState;
  storeKey: "local" | "session";
  storeLocation: Storage;
  clear(): void;
  getItem(key: string): string | null;
  key(index: number): string | null;
  removeItem(key: string): void;
  setItem(key: string, value: string): string | null;
};

export enum METROUTE {
  home = "/",
  visit = "/visit",
  directory = "/directory",
  // ? INACTIVE / UNCREATED
  // "/collection"
  // "/explore"
  // "/events"
}

export enum METTHEMECOLOR {
  themeRed = "#E4002B",
  themeFocus = "#646CFF",
  themeBlack = "#F6F7F7",
  themeWhite = "#181919",
  pureBlack = "#000000",
  pureWhite = "#FFFFFF",
}

export const METTHEMECOLOR_DATA = [
  {
    id: "basePrimaryLight",
    label: "Base Primary",
    p: METTHEMECOLOR.themeWhite,
    s: METTHEMECOLOR.themeBlack,
    t: METTHEMECOLOR.themeRed,
  },
  {
    id: "onBasePrimaryLight",
    label: "On Base Primary",
    p: METTHEMECOLOR.themeBlack,
    s: METTHEMECOLOR.themeWhite,
    t: METTHEMECOLOR.themeRed,
  },
  {
    id: "basePrimaryDark",
    label: "Base Primary",
    p: METTHEMECOLOR.themeBlack,
    s: METTHEMECOLOR.themeWhite,
    t: METTHEMECOLOR.themeRed,
  },
  {
    id: "onBasePrimaryDark",
    label: "On Base Primary",
    p: METTHEMECOLOR.themeWhite,
    s: METTHEMECOLOR.themeBlack,
    t: METTHEMECOLOR.themeRed,
  },
];
