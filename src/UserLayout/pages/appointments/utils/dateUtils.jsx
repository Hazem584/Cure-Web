import { NORMALIZED_DAY_OPTIONS } from "../constants";


export const normalizeDateValue = (value) => {
  if (!value) {
    return null;
  }

  const parsed = new Date(value);
  parsed.setHours(0, 0, 0, 0);
  return parsed;
};

export const isSameDay = (dateA, dateB) => {
  if (!dateA || !dateB) {
    return false;
  }

  const normalizedA = normalizeDateValue(dateA);
  const normalizedB = normalizeDateValue(dateB);

  return normalizedA?.getTime() === normalizedB?.getTime();
};

const parseTimeLabelToMinutes = (label = "") => {
  const [timePart, period] = label.split(" ");
  if (!timePart || !period) {
    return null;
  }

  const [hoursString, minutesString] = timePart.split(":");
  const hours = Number(hoursString);
  const minutes = Number(minutesString);

  if (Number.isNaN(hours) || Number.isNaN(minutes)) {
    return null;
  }

  const normalizedHours =
    (hours % 12) + (period.toUpperCase() === "PM" ? 12 : 0);
  return normalizedHours * 60 + minutes;
};

export const filterAvailableTimeSlots = (
  timeSlots,
  selectedDate,
  now = new Date()
) => {
  if (!Array.isArray(timeSlots) || !timeSlots.length || !selectedDate) {
    return timeSlots || [];
  }

  if (!isSameDay(selectedDate, now)) {
    return timeSlots;
  }

  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  return timeSlots.filter(({ value }) => {
    const slotMinutes = parseTimeLabelToMinutes(value);
    if (slotMinutes === null) {
      return true;
    }

    return slotMinutes >= currentMinutes;
  });
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
