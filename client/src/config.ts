export type LocationConfig =
  | { id: "landing-page"; title: "Landing"; url: "/" }
  | { id: "history-page"; title: "History"; url: "/history" }
  | { id: "locations-page"; title: "Mission"; url: "/mission" }
  | { id: "collections-page"; title: "Collection"; url: "/collections" };

export const locationConfig: LocationConfig[] = [
  { id: "landing-page", title: "Landing", url: "/" },
  { id: "history-page", title: "History", url: "/history" },
  { id: "locations-page", title: "Mission", url: "/mission" },
  { id: "collections-page", title: "Collection", url: "/collections" },
];

export type MetEventTitles =
  | "Collection Tour: Impressionism and Post-Impressionism"
  | "Collection Tour: Ancient Greek Art and Sculpture"
  | "Symposium—Chroma: Ancient Sculpture in Color, Day 1"
  | "Symposium—Chroma: Ancient Sculpture in Color, Day 2";

export type MetEventLocations =
  | "The Met Fifth Avenue - The Grace Rainey Rogers Auditorium"
  | "The Met Fifth Avenue - Meeting Point: Gallery 534"
  | "The Met Fifth Avenue - Museum-wide Fifth Avenue";

export type MetEventObject = {
  date: string; // Saturday / March 25th
  title: MetEventTitles;
  location: MetEventLocations;
  tourType: "METTOURS" | "METSPEAKS" | "METLIVEARTS";
  registerRequired?: boolean;
  price: string; // Free with Museum Admission
};

enum MetOperationalHours {
  _CHRISTMASDAY = "Closed",
  _LABOURDAY = "Closed",
  _NEWYEARSDAY = "Closed",
  _THANKSGIVINGDAY = "Closed",
  _MON = "10:00 a.m. - 5:00 p.m.",
  _SUN = "10:00 a.m. - 5:00 p.m.",
  _TUE = "10:00 a.m. - 5:00 p.m.",
  _WED = "Closed",
  _THU = "10:00 a.m. - 5:00 p.m.",
  _FRI = "10:00 a.m. - 9:00 p.m.",
  _SAT = "10:00 a.m. - 9:00 p.m.",
}

export enum ChronologicalTimePeriods {
  _8000BC_2000BC = "8000-2000 B.C.",
  _2000BC_1000BC = "2000-1000 B.C.",
  _1000BC_1AD = "1000 B.C.-1 A.D.",
  _1AD_500AD = "1-500 A.D.",
  _500AD_1000AD = "500-1000 A.D.",
  _1000AD_1400AD = "1000-1400 A.D.",
  _1400AD_1600AD = "1400-1600 A.D.",
  _1600AD_1800AD = "1600-1800 A.D.",
  _1800AD_1900AD = "1800-1900 A.D.",
  _1900AD_PRESENT = "1800-1900 A.D.",
}

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
