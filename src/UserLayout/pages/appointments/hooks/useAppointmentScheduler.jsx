import { useEffect, useMemo, useState } from "react";
import {
  DEFAULT_SELECTED_SLOT_INDEX,
  DEFAULT_TIME_SLOTS,
  REFRESH_INTERVAL_MS,
} from "../constants";
import {
  buildDateOptions,
  filterAvailableTimeSlots,
  normalizeDateValue,
} from "../utils/dateUtils";

const getFallbackDate = (dates) =>
  dates[0]?.value || normalizeDateValue(new Date());

export const useAppointmentScheduler = () => {
  const [dates, setDates] = useState(() => buildDateOptions(new Date()));
  const [selectedDate, setSelectedDate] = useState(() =>
    normalizeDateValue(new Date())
  );
  const [now, setNow] = useState(() => new Date());
  const initialTimeSlots = filterAvailableTimeSlots(
    DEFAULT_TIME_SLOTS,
    normalizeDateValue(new Date()),
    new Date()
  );
  const [selectedTime, setSelectedTime] = useState(
    initialTimeSlots[DEFAULT_SELECTED_SLOT_INDEX]?.value ||
      initialTimeSlots[0]?.value ||
      ""
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const nextNow = new Date();
      setNow(nextNow);

      setDates((currentDates) => {
        const nextDates = buildDateOptions(nextNow);
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

  const availableTimeSlots = useMemo(
    () => filterAvailableTimeSlots(DEFAULT_TIME_SLOTS, selectedDate, now),
    [now, selectedDate]
  );

  useEffect(() => {
    setSelectedTime((current) => {
      if (availableTimeSlots.some(({ value }) => value === current)) {
        return current;
      }

      return (
        availableTimeSlots[DEFAULT_SELECTED_SLOT_INDEX]?.value ||
        availableTimeSlots[0]?.value ||
        ""
      );
    });
  }, [availableTimeSlots]);

  return {
    dates,
    timeSlots: availableTimeSlots,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
  };
};

export default useAppointmentScheduler;
