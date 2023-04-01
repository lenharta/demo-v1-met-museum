import { APPTHEMEAVATARS, APPTHEMEMODES } from "./config.app";

export type ConfigSessionStateObject = {
  isCurrentSession?: "isCurrentSession";
};

export type ConfigGlobalAppState = {
  isThemeAvatar?: APPTHEMEAVATARS;
  isThemeMode?: APPTHEMEMODES;
};

export type ConfigStateObject<T extends {}> = {
  isMenuOpen?: "isMenuOpen";
  isModalOpen?: "isModalOpen";
  isSession?: "isSession";
  isLoading?: "isLoading";
  isCurrentSession?: "isCurrentSession";
  isThemeAvatar?: APPTHEMEAVATARS;
  isThemeMode?: APPTHEMEMODES;
  isError?: Error;
  data?: T[];
};

export type ConfigDateObject = {
  year: number;
  month: number;
  day: number;
};

export type ConfigBaseProps = {
  title: string;
  text: string;
  id: string;
};

export enum LOOKUP_KEYCODES {
  key1 = "Digit1",
  key2 = "Digit2",
  key3 = "Digit3",
  key4 = "Digit4",
  key5 = "Digit5",
  key6 = "Digit6",
  key7 = "Digit7",
  key8 = "Digit8",
  key9 = "Digit9",
  key0 = "Digit0",
  keyEscape = "Escape",
  keyEnter = "Enter",
  keyTab = "Tab",
}

// [$]: COLOR CONFIG

export type ConfigRGBAObject = { r: number; g: number; b: number; a: number };
export type ConfigHSLAObject = { h: number; s: number; l: number; a: number };

export const DEFAULT_GRADIENT_ANGLE = 90;
export const DEFAULT_GRADIENT_OBJECT: ConfigRGBAObject[] = [
  { r: 31, g: 162, b: 255, a: 1 },
  { r: 18, g: 216, b: 250, a: 1 },
  { r: 166, g: 255, b: 203, a: 1 },
];

// [$]: TYPOGRAPHY CONFIG

export type ConfigFontSize =
  | 12
  | 14
  | 16
  | 18
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 52
  | 64
  | 72
  | 96;

export type ConfigFontWeight =
  | "p-bold"
  | "p-medium"
  | "p-regular"
  | "p-semibold"
  | "s-bold"
  | "s-light"
  | "s-black"
  | "s-medium"
  | "s-regular";

// [$] Application Content & Copy

export type ConfigCollectionEventLocationTitle =
  | "Collection Tour: Impressionism and Post-Impressionism"
  | "Collection Tour: Ancient Greek Art and Sculpture"
  | "Symposium—Chroma: Ancient Sculpture in Color, Day 1"
  | "Symposium—Chroma: Ancient Sculpture in Color, Day 2";

export type ConfigCollectionEventLocation =
  | "The Met Fifth Avenue - The Grace Rainey Rogers Auditorium"
  | "The Met Fifth Avenue - Meeting Point: Gallery 534"
  | "The Met Fifth Avenue - Museum-wide Fifth Avenue";

export type ConfigCollectionEventLocationObject = {
  date: string; // Saturday / March 25th
  title: ConfigCollectionEventLocationTitle;
  location: ConfigCollectionEventLocation;
  tourType: "METTOURS" | "METSPEAKS" | "METLIVEARTS";
  registerRequired?: boolean;
  price: string; // Free with Museum Admission
};

const MetAppHoursOfOperation = {
  christmas: null,
  labourDay: null,
  newYears: null,
  thanksgiving: null,
  sunday: [10, 5],
  monday: [10, 5],
  tuesday: [10, 5],
  wednesday: null,
  thursday: [10, 5],
  friday: [10, 9],
  saturday: [10, 9],
};

const MetAppChronology = [
  {
    title: "Anatolia and the Caucasus, 8000-2000 B.C.",
    range: { start: "8000 B.C.", end: "2000 B.C." },
  },
  {
    title: "Anatolia and the Caucasus, 2000-1000 B.C.",
    range: { start: "2000 B.C.", end: "1000 B.C." },
  },
  {
    title: "Anatolia and the Caucasus, 1000-1 A.D.",
    range: { start: "1000 B.C.", end: "1 A.D." },
  },
  {
    title: "Anatolia and the Caucasus, 1-500 A.D.",
    range: { start: "1 A.D.", end: "500 A.D." },
  },
  {
    title: "Anatolia and the Caucasus, 500-1000 A.D.",
    range: { start: "500 A.D.", end: "1000 A.D." },
  },
  {
    title: "Anatolia and the Caucasus, 1000-1400 A.D.",
    range: { start: "1000 A.D.", end: "1400 A.D." },
  },
  {
    title: "Anatolia and the Caucasus, 1500-1600 A.D.",
    range: { start: "1500 A.D.", end: "1600 A.D." },
  },
  {
    title: "Anatolia and the Caucasus, 1700-1800 A.D.",
    range: { start: "1700 A.D.", end: "1800 A.D." },
  },
  {
    title: "Anatolia and the Caucasus, 1800-1900 A.D.",
    range: { start: "1800 A.D.", end: "1900 A.D." },
  },
  {
    title: "Anatolia and the Caucasus, 1900-present A.D.",
    range: { start: "1900 A.D.", end: "present" },
  },
];

export const departments = [
  {
    departmentId: 1,
    displayName: "American Decorative Arts",
  },
  {
    departmentId: 3,
    displayName: "Ancient Near Eastern Art",
  },
  {
    departmentId: 4,
    displayName: "Arms and Armor",
  },
  {
    departmentId: 5,
    displayName: "Arts of Africa, Oceania, and the Americas",
  },
  {
    departmentId: 6,
    displayName: "Asian Art",
  },
  {
    departmentId: 7,
    displayName: "The Cloisters",
  },
  {
    departmentId: 8,
    displayName: "The Costume Institute",
  },
  {
    departmentId: 9,
    displayName: "Drawings and Prints",
  },
  {
    departmentId: 10,
    displayName: "Egyptian Art",
  },
  {
    departmentId: 11,
    displayName: "European Paintings",
  },
  {
    departmentId: 12,
    displayName: "European Sculpture and Decorative Arts",
  },
  {
    departmentId: 13,
    displayName: "Greek and Roman Art",
  },
  {
    departmentId: 14,
    displayName: "Islamic Art",
  },
  {
    departmentId: 15,
    displayName: "The Robert Lehman Collection",
  },
  {
    departmentId: 16,
    displayName: "The Libraries",
  },
  {
    departmentId: 17,
    displayName: "Medieval Art",
  },
  {
    departmentId: 18,
    displayName: "Musical Instruments",
  },
  {
    departmentId: 19,
    displayName: "Photographs",
  },
  {
    departmentId: 21,
    displayName: "Modern Art",
  },
];

export type MetCollectionDepts =
  | "African Art"
  | "American Art"
  | "Ancient American Art"
  | "Ancient Near Eastern Art"
  | "Arms and Armor"
  | "Asian Art"
  | "The Costume Institute"
  | "Drawings and Prints"
  | "Egyptian Art"
  | "European Paintings"
  | "European Sculpture and Decorative Arts"
  | "Greek and Roman Art"
  | "Islamic Art"
  | "The Robert Lehman Collection"
  | "The Libraries"
  | "Medieval Art and The Cloisters"
  | "Modern and Contemporary Art"
  | "Musical Instruments"
  | "Oceanic Art"
  | "Photographs";

type FeaturedThemeTag =
  | "architecture"
  | "contemplation"
  | "death"
  | "fashion"
  | "maps"
  | "portraits"
  | "skies"
  | "love"
  | "dogs"
  | "flowers"
  | "interior"
  | "books"
  | "landscapes";

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

// export type AssetLookup = typeof assetLookup;
// export type AssetLookupFilename = keyof AssetLookup;

// mission_page
// visit_page
// tickets_page
// about_page
// accessibility_page
// conservation_page
// career_page
// volunteer_page
// fellowships_page
// internships_page
// support_page
// membership_page
// hostingEvents_page
// corporateSupport_page
// travelWithMet_page
// exhibit_page
// collection_page

// [] now-on view
// [] locations-and hours
// [] feature-cards
// [] more-to explore online
// [] Perspectives
// [] Audio Guides
// [] Collection Areas
// [] Learning Resources
// [] Group Tours
// [] Online Publications
// [] Virtual Events
// [] Conservation and Scientific Research
// [] Travel

// The Met Fifth Avenue
// URLS
// visit/plan-your-visit
// visit/dining
// visit/group-visits
// /collection
// /collections
// /visit/membership
// /visit/admission
// /events
// /events/talks
// /events/family
// /events/virtual
// /events/members
// /events/workshops
// /events/performances
// /events/accessibility
// /tours
// /tours/family
// /tours/highlights
// /tours/accessibility
// /tours/guided
// /exhibitions
// /exhibitions/past
// /exhibitions/current
// /exhibitions/upcoming
// mapLink - https://maps.metmuseum.org/?screenmode=base&floor=1#hash=17.36/40.779068/-73.963171/-61

// TheMetMuseum Website Copy

export const copyBeforeYouGoSection = [
  {
    id: 1,
    title: "Vistor Guidelines",
    text: "Masks are strongly recommended. Review our lastest guidelines",
  },
  {
    id: 2,
    title: "Parking and Directions",
    text: "Get information on traveling to the museum",
  },
  {
    id: 3,
    title: "Museum Map",
    text: "Museum Map Use The Met's interactive map to get around the Museum.",
  },
  {
    id: 4,
    title: "Accessibility",
    text: "We welcome all visitors and are committed to offering programs and services that are accessible to everyone.",
  },
  {
    id: 5,
    title: "Dining",
    text: "Choose from a wide menu that includes items for our youngest visitors",
  },
  {
    id: 6,
    title: "Membership",
    text: "Enjoy free admission, complimentary guest tickets, invitations to exclusive viewing hours, discounts, and more.",
  },
];

export const copyMoreWaysToExploreCards = [
  {
    id: 1,
    title: "An Hour At The Met",
    imgSrc:
      "https://cdn.sanity.io/images/cctd4ker/production/d0d17fb99363ba2a7b8e26140768aa3741d9fb13-1040x1040.jpg?w=1080&q=75&auto=format",
    text: "Explore some of The Met's collection highlights in the one hour tour.",
  },
  {
    id: 2,
    title: "Audio Guide",
    imgSrc:
      "https://cdn.sanity.io/images/cctd4ker/production/9bdad37dadb73779d494f673044656ec0ff703fd-1080x1080.jpg?w=1080&q=75&auto=format",
    text: "Stream audio guide content to your device and listen in the galleries.",
  },
  {
    id: 3,
    title: "Primers",
    imgSrc: "",
    text: "Get a quick, immersive look at an exhibition or topic.",
  },
];

export const copyNowOnViewExhibitCards = [];
