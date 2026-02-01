import toBengaliDigits from "@/assets/lib/toBanglaDigits";

const map: Record<number, string> = {
  1: "প্রথম",
  2: "দ্বিতীয়",
  3: "তৃতীয়",
  4: "চতুর্থ",
  5: "পঞ্চম",
  6: "ষষ্ঠ",
  7: "সপ্তম",
  8: "অষ্টম",
  9: "নবম",
  10: "দশম",
  11: "একাদশ",
  12: "দ্বাদশ",
  13: "ত্রয়োদশ",
  14: "চতুর্দশ",
  15: "পঞ্চদশ",
};

// return mapped word when available, otherwise fallback to Bengali digits + 'তম'
export default function ordinal(n?: number) {
  if (!n && n !== 0) return "";
  return map[n] ?? `${toBengaliDigits(n ?? 0)}তম`;
}
