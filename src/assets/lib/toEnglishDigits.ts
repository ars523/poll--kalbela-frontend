//Convert bengali digit to english digit.
interface ToEnglishDigits {
  (banglaNumber: string | number): number;
}

const toEnglishDigits: ToEnglishDigits = (banglaNumber) => {
  const banglaDigits: string[] = [
    "০",
    "১",
    "২",
    "৩",
    "৪",
    "৫",
    "৬",
    "৭",
    "৮",
    "৯",
  ];
  const englishDigits: string[] = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  const converted: string = banglaNumber
    ?.toString()
    ?.split("")
    ?.map((digit: string) => {
      const digitIndex: number = banglaDigits.indexOf(digit);
      return digitIndex !== -1 ? englishDigits[digitIndex] : digit;
    })
    ?.join("");

  return parseInt(converted);
};

export default toEnglishDigits;
