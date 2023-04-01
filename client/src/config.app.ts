export enum APPROUTEKEYS {
  landing = "Landing",
  history = "History",
  locations = "Mission",
  collections = "Collection",
}
export enum APPTHEMEMODES {
  dark = "mode--dark",
  light = "mode--light",
}
export enum APPTHEMEAVATARS {
  bug = "avatar--bug",
  bat = "avatar--bat",
  star = "avatar--star",
  spade = "avatar--spade",
  rocket = "avatar--rocket",
  zombie = "avatar--zombie",
  flower = "avatar--flower",
}
export enum APPTERMSAGREEMENT {
  titleMessage = "Terms & Service Agreement",
  clickMessages = "By clicking 'accept', you are agreeing to our terms of service.",
  checkMessage = "By checking this box, you are agreeing to our terms of service.",
}

// African Art in The Michael C. Rockefeller Wing
// The Met's collection of works by artists from across sub-Saharan Africa comprises nearly 3,000 works spanning two millennia, several hundred distinct cultures, and 39 contemporary nation states.
//
// Several sculptures are exhibited throughout a large, open, indoor court
// The American Wing
// Ever since its establishment in 1870, the Museum has acquired important examples of American art. Today, the American Wing's ever-evolving collection comprises some 20,000 works by African American, Euro American, Native American, and Latin American artists, ranging from the colonial to early-modern period.
//
// Room from an ancient Assyrian place decorated with large stone relief panels and colossal winged, human-headed animal deity sculptures
// Ancient Near Eastern Art
// The Met's collection of ancient Near Eastern art includes more than 7,000 works ranging in date from the eighth millennium B.C. through the centuries just beyond the time of the Arab conquests of the seventh century A.D.
//
// Arms and Armor equestrian court
// Arms and Armor
// The principal goals of the Arms and Armor Department are to collect, preserve, research, publish, and exhibit distinguished examples representing the art of the armorer, swordsmith, and gunmaker.
//
//
// Ancient American Art in The Michael C. Rockefeller Wing
// The Met's collection of ancient American art, situated in the Michael C. Rockefeller Wing, comprises more than 6,000 works of art representing almost 5,000 years of history from North, Central, and South America and the Caribbean.
//
// An interior courtyard with pagodas, plantings, ornamental rocks, and a fish pond
// Asian Art
// The Met's collection of Asian art—more than 35,000 objects, ranging in date from the third millennium B.C. to the twenty-first century—is one of the largest and most comprehensive in the world.
//
// Mannequins lined up on a display wearing futuristic, metallic outfits.
// The Costume Institute
// The Costume Institute's collection of more than 33,000 costumes and accessories represents five continents and seven centuries of fashionable dress and accessories for men, women, and children, from the fifteenth century to the present.
//
// Room with wooden floors and prints on a gray wall
// Drawings and Prints
// The Met's collection of drawings and prints—one of the most comprehensive and distinguished of its kind in the world—began with a gift of 670 works from Cornelius Vanderbilt, a Museum trustee, in 1880.
//
// An ancient Egyptian sandstone temple in two separate parts in a large glass-enclosed gallery at dusk; the first part of the temple is a large squared arch, the second is a small rectangular building fronted by two columns topped with stylized leaves and plants
// Egyptian Art
// The Met's collection of ancient Egyptian art consists of approximately 26,000 objects of artistic, historical, and cultural importance, dating from the Paleolithic to the Roman period (ca. 300,000 B.C.–A.D. 4th century).
//
// View of a gallery with four Monet paintings
// European Paintings
// The Met's celebrated European Paintings collection encompasses more than 2,500 works of art from the thirteenth through the early twentieth century.
//
// A large, long, sunlit interior courtyard for large European sculptures
// European Sculpture and Decorative Arts
// The 50,000 objects in the Museum's comprehensive collection of European sculpture and decorative arts reflect the development of a number of art forms in Western European countries from the early fifteenth through the early twentieth century.
//
// A very large gallery enclosed by a colonnade and filled with with stone sculptures from ancient Rome lit by natural sunlight.
// Greek and Roman Art
// The Museum's collection of Greek and Roman art comprises more than 30,000 works ranging in date from the Neolithic period (ca. 4500 B.C.) to the time of the Roman emperor Constantine's conversion to Christianity in A.D. 312.
//
// A room from Damascus decorated with gilded dark wood paneling, low dark red velvet covered cushions, and a red and white stone floor
// Islamic Art
// The Met's collection of Islamic art is one of the most comprehensive in the world and ranges in date from the seventh to the twenty-first century. Its more than 15,000 objects reflect the great diversity and range of the cultural traditions from Spain to Indonesia.
//
// A small, sunlit, two-story octagonal interior courtyard in the middle of the Museum wing for the Robert Lehman Collection
// The Robert Lehman Collection
// The Robert Lehman Collection is one of the most distinguished privately assembled art collections in the United States. Robert Lehman's bequest to The Met is a remarkable example of twentieth-century American collecting.
//
// A very large gallery with a dark stone floor and central arcades subdividing the space for medieval Christian sculptures and church pieces
// Medieval Art and The Cloisters
// The Museum's collection of medieval and Byzantine art is among the most comprehensive in the world, encompassing the art of the Mediterranean and Europe from the fall of Rome to the beginning of the Renaissance.
//
// Alicja Kwade's Parapivot installation on the roof of The Met, with the New York City skyline in the background
// Modern and Contemporary Art
// The Met’s engagement with art from 1890 to today includes the acquisition and exhibition of works in a range of media, spanning movements in modernism to contemporary practices from across the globe.
//
// A close-up view looking up at a huge brass pipe organ in a brightly lit gallery with a high, vaulted ceiling
// Musical Instruments
// The Museum's collection of musical instruments includes approximately 5,000 examples from six continents and the Pacific Islands, dating from about 300 B.C. to the present.
//
// Oceanic Art in The Michael C. Rockefeller Wing
// The expansive region of Oceania covers over a third of the Earth's surface and is home to some 1,800 different cultures and a kaleidoscopic range of artistic traditions. The Met's collection of Oceanic art comprises over 2,800 works that present the rich history of creative expression and innovation that is emblematic of the Pacific islands.
//
// Photographs displayed in square frames hang on a white wall. More photography is displayed inside a glass case in the center of the room.
// Photographs
// Established as an independent curatorial department in 1992, The Met's Department of Photographs houses a collection of more than 75,000 works spanning the history of photography from its invention in the 1830s to the present.

const lookupTheMetAppFifthAvenue = {
  id: "theMetfifthAvenue",
  name: "The Met Fifth Avenue",
  tagline: "Over 5000 years of art from around the world.",
  address: {
    city: { code: "10028", name: "New York", district: "at 82nd Street" },
    street: { number: 1000, name: "5th", type: "Avenue" },
    state: { code: "NY", name: "New York" },
  },
  position: {
    coords: { latitude: "40.7794366", longitude: "-73.963244" },
    coordsRelative: { N: "40°46'46.0", W: "73°57'47.7" },
    googleapisMapUrl:
      "https://www.google.com/maps/place/The+Metropolitan+Museum+of+Art/@40.7794366,-73.963244,15z/data=!4m6!3m5!1s0x89c25896f660c26f:0x3b2fa4f4b6c6a1fa!8m2!3d40.7794366!4d-73.963244!16zL20vMDljN2I",
  },
  imageUrls: [
    { AtriumDayAerial: "fifth_ave_atrium_day_aerial.png" },
    { ExteriorDayAerial: "fifth_ave_exterior_day_aerial.jpg" },
    { ExteriorDayFountain: "fifth_ave_exterior_day_fountain.jpg" },
    { ExteriorDayBusysteps: "fifth_ave_exterior_day_busysteps.jpg" },
    { ExteriorNightFountain: "fifth_ave_exterior_night_fountain.jpg" },
  ],
  hours: [
    { type: "operational", range: [10, 17], label: "Sunday" },
    { type: "operational", range: [10, 17], label: "Monday" },
    { type: "operational", range: [10, 17], label: "Tuesday" },
    { type: "operational", range: [10, 17], label: "Wednesday" },
    { type: "operational", range: [10, 17], label: "Thursday" },
    { type: "extended", range: [10, 21], label: "Saturday" },
    { type: "extended", range: [10, 21], label: "Friday" },
    { type: "holiday", range: null, label: "Christmas Day" },
    { type: "holiday", range: null, label: "Thanksgiving Day" },
    { type: "holiday", range: null, label: "New Year's Day" },
    { type: "holiday", range: null, label: "First Monday in May" },
  ],
  areas: [
    {
      id: "theMetCloisters-main-hall",
      title: "The Cloisters, Main Hall",
      description:
        "The Met Cloisters, located on four acres overlooking the Hudson River in northern Manhattan's Fort Tryon Park, is the branch of the Museum dedicated to the art, architecture, and gardens of medieval Europe. Deriving its name from the medieval cloisters that form the core of the building, it presents a harmonious and evocative setting for more than 2,000 exceptional artworks and architectural elements from the medieval West.",
    },
  ],
};

const lookupTheMetAppCloisters = {
  id: "theMetCloisters",
  name: "The Met Cloisters",
  tagline: "Art, architecture, and gardens of medieval Europe.",
  hours: [
    { type: "operational", time: [10, 17], label: "Sunday" },
    { type: "operational", time: [10, 17], label: "Monday" },
    { type: "operational", time: [10, 17], label: "Tuesday" },
    { type: "operational", time: [10, 17], label: "Wednesday" },
    { type: "operational", time: [10, 17], label: "Thursday" },
    { type: "extended", time: [10, 21], label: "Saturday" },
    { type: "extended", time: [10, 21], label: "Friday" },
    { type: "holiday", time: null, label: "Christmas Day" },
    { type: "holiday", time: null, label: "Thanksgiving Day" },
    { type: "holiday", time: null, label: "New Year's Day" },
  ],
  address: {
    street: { number: 99, name: "Margaret Corbin", type: "Drive" },
    city: { code: "10040", name: "New York", district: "Fort Tryon Park" },
    state: { code: "NY", name: "New York" },
    position: {
      coords: { latitude: "40.7794366", longitude: "-73.963244" },
      coordsRelative: { N: "40°46'46.0", W: "73°57'47.7" },
      googleapisMapUrl:
        "https://www.google.com/maps/place/The+Met+Cloisters/@40.8648628,-73.9317274,17z/data=!3m2!4b1!5s0x89c2f400eba60d7f:0xff95595ea2ae3cab!4m6!3m5!1s0x89c2f40170f2a62b:0x9191e7fa95df29ad!8m2!3d40.8648628!4d-73.9317274!16zL20vMDFyczdi",
    },
  },
};
