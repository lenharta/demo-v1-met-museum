import { assetLookup } from "./config";

export type CalendarWeekdays =
  | "sunday"
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday";

export type MetLocationObjectHours = {
  key: CalendarWeekdays;
  value: { open: string; close: string };
};

export type MetLocationObject = {
  id: string;
  title: string;
  tagline: string;
  holidays: string;
  imageSrc: string;
  hours: MetLocationObjectHours[];
};

export type AssetLookup = typeof assetLookup;
export type AssetLookupFilename = keyof AssetLookup;
