export const capitalizeString = (string: string) => {
  const formatFirstChar = string.charAt(0).toUpperCase();
  const formatSlug = string.slice(1, string.length);
  return formatFirstChar + formatSlug;
};

let formatList: string[] = [];

export const clearForFormat = (string: string) => string.replaceAll("_", "-");

export const clearForFormatList = (string: string, ignoreCasing?: boolean) => {
  if (ignoreCasing) return formatList.push(string);
  return formatList.push(capitalizeString(string));
};

export function formatImageName(id: string) {
  const wordList = clearForFormat(id).split("-");
  const blacklist = ["and", "the", "a", "is"];

  wordList.forEach((value) => {
    if (blacklist.includes(value)) return clearForFormatList(value, true);
    if (value === "dept") return clearForFormatList(value + ".");
    return clearForFormatList(value);
  });

  return {
    errorText: clearForFormat(id).toLowerCase(),
    altText: formatList.join(" "),
  };
}
