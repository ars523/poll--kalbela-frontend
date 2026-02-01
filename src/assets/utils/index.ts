const engToBnNumber = (char: string) => {
  const numbersObj: { [key: string]: string } = {
    0: "০",
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
    ".": ".",
    "-": "-",
  };
  return numbersObj[char];
};
export const toBanglaNum = (
  value: String | number | null | undefined
): string => {
  if (value === null || value === undefined || value === "") {
    return "--";
  }

  if (typeof value === "number") {
    return value
      .toString()
      .split("")
      .map((num) => engToBnNumber(num) || num)
      .join("");
  }

  if (typeof value === "string") {
    return value
      .split("")
      .map((char) => engToBnNumber(char) || char)
      .join("");
  }

  return "--";
};
