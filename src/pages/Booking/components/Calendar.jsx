import React from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function Calendar() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState(null);
  const formatted = date ? format(date, "PPP") : "Select a date";

  return (
    <div className="relative w-64">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full border rounded-lg px-4 py-2 text-gray-700 dark:bg-dark-darkBg dark:border-2 dark:border-dark-borderDark bg-white text-left flex justify-between items-center shadow-sm"
      >
        <span>{formatted}</span>
        <span className="text-gray-500">▼</span>
      </button>

      {open && (
        <div className="absolute z-10 mt-2 bg-white border rounded-lg shadow-lg p-3 ">
          <DayPicker
            mode="single"
            selected={date}
            onSelect={(d) => {
              setDate(d);
              setOpen(false);
            }}
            showOutsideDays
            className="border-0"
          />
        </div>
      )}
    </div>
  );
}

export default Calendar;
