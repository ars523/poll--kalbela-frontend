interface ConvertDigit {
  (digit: string): string;
}

interface ToBengaliDigits {
  (number: number | string): string;
}

const toBengaliDigits: ToBengaliDigits = function (number) {
  const bengaliDigits: string[] = [
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

  const convertDigit: ConvertDigit = function (digit) {
    const digitNumber = parseInt(digit, 10);
    if (digitNumber >= 0 && digitNumber <= 9) {
      return bengaliDigits[digitNumber];
    } else {
      return digit; // If not a digit, return as is (for decimal point, etc.)
    }
  };

  const bengaliNumber: string = number
    ?.toString()
    ?.split("")
    ?.map(convertDigit)
    ?.join("");

  return bengaliNumber;
};

export default toBengaliDigits;
