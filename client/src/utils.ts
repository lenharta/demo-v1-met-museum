export const useLogClick = (string: string) => console.log(string);

export const useCapitalizeString = (string: string) => {
  const uppercase = string.charAt(0).toUpperCase();
  const slug = string.slice(1, string.length);
  return uppercase + slug;
};

export function clxss(base: string, modifiers: string[]): string {
  if (modifiers.length < 1) return "";
  if (modifiers.length === 1) return modifiers[0];
  return `${base}${" "}` + modifiers.join(" ").trimEnd();
}
