export const MET_MUSEUM_API_BASE_URL =
  "https://collectionapi.metmuseum.org/public";

export enum MET_MUSEUM_API_ENDPOINTS {
  exhibit = "/collection/v1/object",
  exhibit437133 = "/collection/v1/objects/437133",
  exhibit546802 = "/collection/v1/objects/546802",
  departments = "/collection/v1/departments",
}

export enum JSON_PLACEHOLDER_API_ENDPOINTS {
  baseURL = "https://jsonplaceholder.typicode.com",
  basePostURL = "https://jsonplaceholder.typicode.com/posts",
  baseUserURL = "https://jsonplaceholder.typicode.com/users",
}

export type MET_MUSEUM_API_DEPARTMENT_OBJECT = {
  departmentId: number;
  displayName: string;
};

export type MET_MUSEUM_API_EXHIBIT_OBJECT = {
  objectID: number;
  isHighlight: boolean;
  accessionNumber: string;
  accessionYear: string;
  isPublicDomain: boolean;
  primaryImage: string;
  primaryImageSmall: string;
  additionalImages: string[];
  constituents: {
    constituentID: number;
    role: string;
    name: string;
    constituentULAN_URL: string;
    constituentWikidata_URL: string;
    gender: string;
  }[];
  department: string;
  objectName: string;
  title: string;
  culture: string;
  period: string;
  dynasty: string;
  reign: string;
  portfolio: string;
  artistRole: string;
  artistPrefix: string;
  artistDisplayName: string;
  artistDisplayBio: string;
  artistSuffix: string;
  artistAlphaSort: string;
  artistNationality: string;
  artistBeginDate: string;
  artistEndDate: string;
  artistGender: string;
  artistWikidata_URL: string;
  artistULAN_URL: string;
  objectDate: string;
  objectBeginDate: number;
  objectEndDate: number;
  medium: string;
  dimensions: string;
  measurements: {
    elementName: string;
    elementDescription: string;
    elementMeasurements: {
      Height: number;
      Width: number;
    };
  }[];
  creditLine: string;
  geographyType: string;
  city: string;
  state: string;
  county: string;
  country: string;
  region: string;
  subregion: string;
  locale: string;
  locus: string;
  excavation: string;
  river: string;
  classification: string;
  rightsAndReproduction: string;
  linkResource: string;
  metadataDate: string;
  repository: string;
  objectURL: string;
  tags: {
    term: string;
    AAT_URL: string;
    Wikidata_URL: string;
  }[];
  objectWikidata_URL: string;
  isTimelineWork: boolean;
  GalleryNumber: string;
};
