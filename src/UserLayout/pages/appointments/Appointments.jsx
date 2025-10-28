import React, { useEffect, useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import NavBar from "./../../../components/header/NavBar";
import DoctorDetails from "./components/DoctorDetails";
import BookingCalendar from "./components/BookingCalendar";
import ReviewsAndRating from "./components/ReviewsAndRating";
import Footer from "../../../components/footer/Footer";

const NORMALIZED_DAY_OPTIONS = { weekday: "short" };

const buildDateOptions = (centerDate = new Date()) => {
  const baseDate = new Date(centerDate);
  baseDate.setHours(0, 0, 0, 0);

  const startDate = new Date(baseDate);
  startDate.setDate(baseDate.getDate() - 3);

  return Array.from({ length: 7 }).map((_, index) => {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + index);

    return {
      label: currentDate.toLocaleDateString("en-US", NORMALIZED_DAY_OPTIONS),
      day: currentDate.getDate().toString().padStart(2, "0"),
      value: currentDate,
    };
  });
};

const timeSlots = [
  { value: "9:00 AM", label: "9:00 AM" },
  { value: "9:30 AM", label: "9:30 AM" },
  { value: "10:00 AM", label: "10:00 AM" },
  { value: "10:30 AM", label: "10:30 AM" },
  { value: "11:00 AM", label: "11:00 AM" },
  { value: "11:30 AM", label: "11:30 AM" },
  { value: "12:00 PM", label: "12:00 PM" },
  { value: "1:00 PM", label: "1:00 PM" },
  { value: "1:30 PM", label: "1:30 PM" },
  { value: "2:00 PM", label: "2:00 PM" },
  { value: "2:30 PM", label: "2:30 PM" },
];

const Appointments = () => {
  const [dates, setDates] = useState(() => buildDateOptions(new Date()));
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  });
  const [selectedTime, setSelectedTime] = useState(timeSlots[4]?.value ?? "");

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
          const stillAvailable = nextDates.some(
            ({ value }) => value.toDateString() === prevSelected?.toDateString()
          );

          if (stillAvailable) {
            return prevSelected;
          }

          return nextDates[3]?.value ?? nextDates[0]?.value ?? null;
        });

        return nextDates;
      });
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="dark:bg-dark-darkBg">
      <NavBar />
      <div className="min-h-screen bg-slate-50 dark:bg-dark-darkBg py-8 px-4 sm:px-6 lg:px-12 max-[300px]:px-2 max-[300px]:py-6">
        <div className="mx-auto">
          <div className="flex flex-col gap-8 lg:flex-row max-[300px]:gap-6">
            <div className="order-1 lg:order-2 lg:flex-shrink-0">
              <DoctorDetails />
            </div>
            <div className="order-2 flex flex-col lg:order-1 lg:flex-1">
              <BookingCalendar
                dates={dates}
                timeSlots={timeSlots}
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                onSelectDate={setSelectedDate}
                onSelectTime={setSelectedTime}
              />
              <ReviewsAndRating />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Appointments;
