import { MetLocationObject } from "../../types";

export default function LocationCard({
  holidays,
  hours,
  id,
  imageSrc,
  tagline,
  title,
}: MetLocationObject) {
  return (
    <div className="LocationCard">
      <h3>{title}</h3>
      <p>{tagline}</p>
      <p>{holidays}</p>
    </div>
  );
}
