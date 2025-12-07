import { useEffect, useState } from "react";
import {
  DEFAULT_SELECTED_SLOT_INDEX,
  DEFAULT_TIME_SLOTS,
  REFRESH_INTERVAL_MS,
} from "../constants";
import { buildDateOptions, normalizeDateValue } from "../utils/dateUtils";

const getFallbackDate = (dates) =>
  dates[0]?.value || normalizeDateValue(new Date());

export const useAppointmentScheduler = () => {
  const [dates, setDates] = useState(() => buildDateOptions(new Date()));
  const [selectedDate, setSelectedDate] = useState(() =>
    normalizeDateValue(new Date())
  );
  const [selectedTime, setSelectedTime] = useState(
    DEFAULT_TIME_SLOTS[DEFAULT_SELECTED_SLOT_INDEX]?.value ||
      DEFAULT_TIME_SLOTS[0]?.value ||
      ""
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDates((currentDates) => {
        const nextDates = buildDateOptions(new Date());
        const hasChanged =
          !currentDates.length ||
          currentDates[0].value.toDateString() !==
            nextDates[0].value.toDateString();

        if (!hasChanged) {
          return currentDates;
        }

        setSelectedDate((prevSelected) => {
          if (
            !prevSelected ||
            !nextDates.some(
              ({ value }) => value.toDateString() === prevSelected.toDateString()
            )
          ) {
            return getFallbackDate(nextDates);
          }
          return prevSelected;
        });

        return nextDates;
      });
    }, REFRESH_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  return {
    dates,
    timeSlots: DEFAULT_TIME_SLOTS,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
  };
};

export default useAppointmentScheduler;
