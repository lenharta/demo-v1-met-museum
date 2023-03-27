import { MetLocationObject } from "./types";

export const assetLookup = {
  dept_arms_and_armor: "/dept_arms_and_armor.jpg",
  dept_american_court: "/dept_american_court.jpg",
  dept_ancient_eastern_art: "/dept_ancient_eastern_art.jpg",
  dept_asian_art: "/dept_asian_art.jpg",
  dept_costume: "/dept_costume.jpg",
  dept_drawings_and_prints: "/dept_drawings_and_prints.jpg",
  dept_egyptian_art: "/dept_egyptian_art.jpg",
  dept_euro_paintings: "/dept_euro_paintings.jpg",
  dept_euro_sculpture_and_decor: "/dept_euro_sculpture_and_decor.jpg",
  dept_greek_roman: "/dept_greek_roman.jpg",
  dept_islamic: "/dept_islamic.jpg",
  dept_medieval: "/dept_medieval.jpg",
  dept_robert_lehman: "/dept_robert_lehman.jpg",
  draft_museum_map: "/draft_museum_map.png",
  event_banner_date_night: "/event_banner_date_night.jpg",
  exhibit_banner_chroma_sculpture: "/exhibit_banner_chroma_sculpture.jpg",
  exhibit_banner_granite_head: "/exhibit_banner_granite_head.jpg",
  exhibit_banner_perspectives_woman: "/exhibit_banner_perspectives_woman.jpg",
  exhibit_banner_womens_history: "/exhibit_banner_womens_history.jpg",
  met_fifth_ave_atrium: "/met_fifth_ave_atrium.png",
  met_fifth_ave_entrance: "/met_fifth_ave_entrance.jpg",
  met_fifth_ave_exterior_1: "/met_fifth_ave_exterior_1.jpg",
  met_fifth_ave_exterior_2: "/met_fifth_ave_exterior_2.jpg",
  met_fifth_ave_exterior_3: "/met_fifth_ave_exterior_3.jpg",
  met_fifth_ave_exterior_night: "/met_fifth_ave_exterior_night.jpg",
};

export const theMetCloistersObject: MetLocationObject = {
  id: "met_cloisters_location",
  title: "The Met Cloisters",
  tagline: "Art, architecture, and gardens of medieval Europe.",
  holidays: "Closed Thanksgiving Day, Christmas Day, New Year's Day",
  imageSrc: "",
  hours: [
    { key: "sunday", value: { open: "10:00 a.m.", close: "5:00 p.m." } },
    { key: "monday", value: { open: "10:00 a.m.", close: "5:00 p.m." } },
    { key: "tuesday", value: { open: "10:00 a.m.", close: "5:00 p.m." } },
    { key: "wednesday", value: { open: "Closed", close: "Closed" } },
    { key: "thursday", value: { open: "10:00 a.m.", close: "5:00 p.m." } },
    { key: "friday", value: { open: "10:00 a.m.", close: "5:00 p.m." } },
    { key: "saturday", value: { open: "10:00 a.m.", close: "5:00 p.m." } },
  ],
};

export const theMetFifthAvenueObject: MetLocationObject = {
  id: "met_fifth_ave_location",
  title: "The Met Fifth Avenue",
  tagline: "Over 5000 years of art from around the world.",
  holidays: "Closed Thanksgiving Day, Christmas Day, New Year's Day",
  imageSrc: "",
  hours: [
    { key: "sunday", value: { open: "10:00 a.m.", close: "5:00 p.m." } },
    { key: "monday", value: { open: "10:00 a.m.", close: "5:00 p.m." } },
    { key: "tuesday", value: { open: "10:00 a.m.", close: "5:00 p.m." } },
    { key: "wednesday", value: { open: "Closed", close: "Closed" } },
    { key: "thursday", value: { open: "10:00 a.m.", close: "5:00 p.m." } },
    { key: "friday", value: { open: "10:00 a.m.", close: "9:00 p.m." } },
    { key: "saturday", value: { open: "10:00 a.m.", close: "9:00 p.m." } },
  ],
};
