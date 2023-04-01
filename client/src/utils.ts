// [$]: Format - Strings
export function capitalizeString<T extends string>(string: T) {
  const cleaning = string.toLowerCase();
  const slug = cleaning.slice(1, string.length);
  const casing = cleaning.charAt(0).toUpperCase();
  return (casing + slug) as T;
}

// [$]: Format - ClassNames
export function clxss<T extends {}>(key: keyof T, modifiers?: T) {
  if (!modifiers) {
  }
  const payload = {};
  return payload;
}

// export const useLogClick = (string: string) => console.log(string);

// export const useCapitalizeString = (string: string) => {
//   const uppercase = string.charAt(0).toUpperCase();
//   const slug = string.slice(1, string.length);
//   return uppercase + slug;
// };

// export function clxss(base: string, modifiers: string[]): string {
//   if (modifiers.length < 1) return "";
//   if (modifiers.length === 1) return modifiers[0];
//   return `${base}${" "}` + modifiers.join(" ").trimEnd();
// }

// export const capitalizeString = (string: string) => {
//   const formatFirstChar = string.charAt(0).toUpperCase();
//   const formatSlug = string.slice(1, string.length).toLowerCase();
//   return formatFirstChar + formatSlug;
// };

// let formatList: string[] = [];

// export const clearForFormat = (string: string) => string.replaceAll("_", "-");

// export const clearForFormatList = (string: string, ignoreCasing?: boolean) => {
//   if (ignoreCasing) return formatList.push(string);
//   return formatList.push(capitalizeString(string));
// };

// export function formatImageName(id: string) {
//   const wordList = clearForFormat(id).split("-");
//   const blacklist = ["and", "the", "a", "is"];

//   wordList.forEach((value) => {
//     if (blacklist.includes(value)) return clearForFormatList(value, true);
//     if (value === "dept") return clearForFormatList(value + ".");
//     return clearForFormatList(value);
//   });

//   return {
//     errorText: clearForFormat(id).toLowerCase(),
//     altText: formatList.join(" "),
//   };
// }
