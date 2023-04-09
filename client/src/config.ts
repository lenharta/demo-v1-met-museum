export type BusinessLocationType = {
  id: string;
  name: string;
  tagline: string;
  position: {
    coords: { latitude: number; longitude: number };
    coordsRelative: { N: string; W: string };
  };
  address: {
    city: { code: string; district: string; name: string };
    state: { code: string; country: string; name: string };
    street: { name: string; number: number; type: string };
  };
  images?: { [key: string]: string }[];
  hours?: { type: string; timeRange: number[] | null; label: string }[];
};
