import { NORMALIZED_DAY_OPTIONS } from "../constants";

export const normalizeDateValue = (value) => {
  if (!value) {
    return null;
  }

  const parsed = new Date(value);
  parsed.setHours(0, 0, 0, 0);
  return parsed;
};

export const buildDateOptions = (
  centerDate = new Date(),
  daysBefore = 0,
  totalDays = 7
) => {
  const baseDate = normalizeDateValue(centerDate) || new Date();
  const startDate = new Date(baseDate);
  startDate.setDate(baseDate.getDate() - daysBefore);

  return Array.from({ length: totalDays }).map((_, index) => {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + index);

    return {
      label: currentDate.toLocaleDateString("en-US", NORMALIZED_DAY_OPTIONS),
      day: currentDate.getDate().toString().padStart(2, "0"),
      value: currentDate,
    };
  });
};

export const formatFullDate = (value) => {
  if (!value) {
    return "";
  }

  return value.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
};
