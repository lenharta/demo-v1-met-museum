export const DEFAULT_DATETIME_LOCAL_MIN = "1/01/2500, 12:00:00 PM";
export const DEFAULT_DATETIME_LOCAL_MAX = "1/01/1990, 12:00:00 PM";
export const DEFAULT_DATETIME_VALUE_LEAP = 28 ?? 29;
export const DEFAULT_DATETIME_VALUE_MAX = 31;
export const DEFAULT_DATETIME_VALUE_MIN = 0;

export const DATETIME_CALENDAR_LOOKUP = {
  jan: { name: "january", days: 31 },
  feb: { name: "february", days: 28 ?? 29 },
  mar: { name: "march", days: 31 },
  apr: { name: "april", days: 30 },
  may: { name: "may", days: 31 },
  jun: { name: "june", days: 30 },
  jul: { name: "july", days: 31 },
  aug: { name: "august", days: 31 },
  sep: { name: "september", days: 30 },
  oct: { name: "october", days: 31 },
  nov: { name: "november", days: 30 },
  dec: { name: "december", days: 31 },
};

export const DATETIME_SUFFIX_LOOKUP = {
  st: [1, 21, 31],
  nd: [2, 22],
  rd: [3, 23],
};

export const calculateLeapYear = (year: number) => {
  const condition04 = 0 == year % 4;
  const condition100 = 0 != year % 100;
  const condition400 = 0 == year % 400;
  if ((condition04 && condition100) || condition400) {
    return 29;
  } else {
    return 28;
  }
};
