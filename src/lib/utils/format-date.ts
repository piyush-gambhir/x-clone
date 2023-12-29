export function isoToMonthYear(isoString: string): string {
  const date = new Date(isoString);
  const options = { year: "numeric", month: "long" };
  return date.toLocaleString("en-US", options);
}

export function isoToDayMonthYear(isoString: string): string {
  const date = new Date(isoString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleString("en-US", options);
}
