import dayjs from "dayjs";

// Bengali month names mapping
const banglaMonths: { [key: string]: string } = {
  January: "জানুয়ারি",
  February: "ফেব্রুয়ারি",
  March: "মার্চ",
  April: "এপ্রিল",
  May: "মে",
  June: "জুন",
  July: "জুলাই",
  August: "আগস্ট",
  September: "সেপ্টেম্বর",
  October: "অক্টোবর",
  November: "নভেম্বর",
  December: "ডিসেম্বর",
};

// Bengali number mapping
const engToBnNumber = (char: string): string => {
  const numbers: { [key: string]: string } = {
    "0": "০",
    "1": "১",
    "2": "২",
    "3": "৩",
    "4": "৪",
    "5": "৫",
    "6": "৬",
    "7": "৭",
    "8": "৮",
    "9": "৯",
  };
  return numbers[char] || char;
};

/**
 * Format date string to Bengali date format
 * This function ensures consistent formatting between server and client
 * to prevent hydration errors.
 * 
 * @param dateString - Date string in format like "2026-01-22 22:27:02"
 * @returns Formatted Bengali date string or empty string if invalid
 */
export const formatBnDate = (dateString: string): string => {
  // Handle invalid dates like "0000-00-00 00:00:00"
  const hasInvalidPattern =
    dateString.includes("0000-00-00") || dateString.startsWith("0000");
  const dayjsDate = dayjs(dateString);
  const isValidDate =
    !hasInvalidPattern && dayjsDate.isValid() && dayjsDate.year() >= 2000;

  if (!isValidDate) {
    return "";
  }

  // Use dayjs format to ensure consistency between server and client
  const formattedDate = dayjsDate.format("DD MMMM YYYY");

  // Convert English month names to Bengali
  const banglaDate = formattedDate.replace(
    /January|February|March|April|May|June|July|August|September|October|November|December/gi,
    (month) => banglaMonths[month as keyof typeof banglaMonths] || month
  );

  // Convert English numbers to Bengali
  return banglaDate
    .split("")
    .map((char) => engToBnNumber(char) || char)
    .join("")
    .replace("জানুয়ারী", "জানুয়ারি"); // Ensure consistent spelling
};

/**
 * Format time string to Bengali time format
 * This function ensures consistent formatting between server and client
 * to prevent hydration errors.
 * 
 * @param dateString - Date string in format like "2026-01-22 22:27:02"
 * @returns Formatted Bengali time string or empty string if invalid
 */
export const formatBnTime = (dateString: string): string => {
  // Handle invalid dates like "0000-00-00 00:00:00"
  const hasInvalidPattern =
    dateString.includes("0000-00-00") || dateString.startsWith("0000");
  const dayjsDate = dayjs(dateString);
  const isValidDate =
    !hasInvalidPattern && dayjsDate.isValid() && dayjsDate.year() >= 2000;

  if (!isValidDate) {
    return "";
  }

  // Use dayjs format to ensure consistency between server and client
  // Format: "h:mm A" (e.g., "10:30 PM")
  const formattedTime = dayjsDate.format("h:mm A");

  // Convert AM/PM to Bengali
  const banglaTime = formattedTime
    .replace("AM", "পূর্বাহ্ন")
    .replace("PM", "অপরাহ্ন");

  // Convert English numbers to Bengali
  return banglaTime
    .split("")
    .map((char) => engToBnNumber(char) || char)
    .join("");
};
