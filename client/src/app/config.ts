import { ChangeEvent } from "react";
import { BaseLocationObject } from "../config";

export enum METROUTES {
  visit = "/visit",
  tours = "/tours",
  events = "/events",
  exhibit = "/exhibit",
}

export type AppState<T extends {}> = {
  isCurrentSession?: "isCurrentSession";
  isModalOpen?: "isModalOpen";
  isMenuOpen?: "isMenuOpen";
  isSession?: "isSession";
  isLoading?: "isLoading";
  isThemeAvatar?: AppStateTheme;
  isThemeMode?: AppStateAvatar;
  isError?: Error;
  data?: T[];
};

export type AppStateTheme = "mode-dark" | "mode-light";

export type AppStateAvatar =
  | "avatar-paintbrush"
  | "avatar-castle"
  | "avatar-painting"
  | "avatar-pencil"
  | "avatar-sculpture"
  | "avatar-"
  | "avatar-scroll"
  | "avatar-"
  | "default";

export type LocalState = {
  isThemeMode?: "mode-light" | "mode-dark";
  isCurrentSession?: "isCurrentSession";
};

export type LocalStore = {
  storeKey: "local" | "session";
  storeData: LocalState;
  storeLocation: Storage;
};

export type LocalStoreAction = {
  clear(): void;
  getItem(key: string): string | null;
  key(index: number): string | null;
  removeItem(key: string): void;
  setItem(key: string, value: string): string | null;
};

export const METLookupLocations: BaseLocationObject[] = [
  {
    id: "metFifthAvenue",
    name: "The Met Fifth Avenue",
    tagline: "Over 5000 years of art from around the world.",
    position: {
      coords: { latitude: 40.7794366, longitude: -73.963244 },
      coordsRelative: { N: "40°46'46.0", W: "73°57'47.7" },
    },
    address: {
      city: { code: "10028", name: "New York", district: "at 82nd Street" },
      street: { number: 1000, name: "5th", type: "Avenue" },
      state: { code: "NY", name: "New York", country: "USA" },
    },
    images: [
      { AtriumDayAerial: "fifth_ave_atrium_day_aerial.png" },
      { ExteriorDayAerial: "fifth_ave_exterior_day_aerial.jpg" },
      { ExteriorDayFountain: "fifth_ave_exterior_day_fountain.jpg" },
      { ExteriorDayBusysteps: "fifth_ave_exterior_day_busysteps.jpg" },
      { ExteriorNightFountain: "fifth_ave_exterior_night_fountain.jpg" },
    ],
    hours: [
      { type: "operational", timeRange: [10, 17], label: "Sunday" },
      { type: "operational", timeRange: [10, 17], label: "Monday" },
      { type: "operational", timeRange: [10, 17], label: "Tuesday" },
      { type: "operational", timeRange: [10, 17], label: "Wednesday" },
      { type: "operational", timeRange: [10, 17], label: "Thursday" },
      { type: "extended", timeRange: [10, 21], label: "Saturday" },
      { type: "extended", timeRange: [10, 21], label: "Friday" },
      { type: "holiday", timeRange: null, label: "Christmas Day" },
      { type: "holiday", timeRange: null, label: "Thanksgiving Day" },
      { type: "holiday", timeRange: null, label: "New Year's Day" },
      { type: "holiday", timeRange: null, label: "First Monday in May" },
    ],
  },
  {
    id: "metCloisters",
    name: "The Met Cloisters",
    tagline: "Art, architecture, and gardens of medieval Europe.",
    position: {
      coords: { latitude: 40.7794366, longitude: -73.963244 },
      coordsRelative: { N: "40°46'46.0", W: "73°57'47.7" },
    },
    address: {
      street: { number: 99, name: "Margaret Corbin", type: "Drive" },
      city: { code: "10040", name: "New York", district: "Fort Tryon Park" },
      state: { code: "NY", name: "New York", country: "USA" },
    },
    hours: [
      { type: "operational", timeRange: [10, 17], label: "Sunday" },
      { type: "operational", timeRange: [10, 17], label: "Monday" },
      { type: "operational", timeRange: [10, 17], label: "Tuesday" },
      { type: "operational", timeRange: [10, 17], label: "Wednesday" },
      { type: "operational", timeRange: [10, 17], label: "Thursday" },
      { type: "extended", timeRange: [10, 21], label: "Saturday" },
      { type: "extended", timeRange: [10, 21], label: "Friday" },
      { type: "holiday", timeRange: null, label: "Christmas Day" },
      { type: "holiday", timeRange: null, label: "Thanksgiving Day" },
      { type: "holiday", timeRange: null, label: "New Year's Day" },
    ],
  },
];
