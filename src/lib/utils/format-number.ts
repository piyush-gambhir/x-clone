export default function formatNumber(number: number): string {
  return new Intl.NumberFormat("en-GB", {
    notation: number > 10_000 ? "compact" : "standard",
    maximumFractionDigits: 1,
  }).format(number);
}
