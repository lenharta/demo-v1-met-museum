import { useState } from "react";
import Icon from "../../assets/Icon";

export function ImageError() {
  return (
    <div className="ImageError">
      <Icon name="NoImage" />
      <p>Image Unavailable.</p>
    </div>
  );
}

export default function Image({ url }: { url?: string }) {
  if (!url) return;
  const [error, errorSet] = useState(false);
  const imported = import(url);
  const loaded = !error && imported;

  if (!loaded) return <ImageError />;
  return (
    <img
      src={url}
      alt="No Image Available"
      onError={() => {
        errorSet(true);
        console.log(`IMAGE ERROR: @'${url}'`);
      }}
    />
  );
}
