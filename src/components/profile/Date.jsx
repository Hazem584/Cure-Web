import React, { useState } from "react";
import { Select, Option } from "@material-tailwind/react";

const DateSelect = () => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const years = Array.from({ length: 100 }, (_, i) => 2025 - i);

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  return (
    <div className="grid grid-cols-3 gap-3 mb-6 max-sm:grid-cols-1">
      <Select
        label="Day"
        color="blue"
        value={day}
        onChange={setDay}
        className="!min-h-[36px] !py-1 !text-sm !h-[36px]"
        containerProps={{ className: "min-w-0 w-full" }}
      >
        {days.map((d) => (
          <Option key={d} value={d}>{d}</Option>
        ))}
      </Select>

      <Select
        label="Month"
        color="blue"
        value={month}
        onChange={setMonth}
        className="!min-h-[36px] !py-1 !text-sm !h-[36px]"
        containerProps={{ className: "min-w-0 w-full" }}
      >
        {months.map((m) => (
          <Option key={m} value={m}>{m}</Option>
        ))}
      </Select>

      <Select
        label="Year"
        color="blue"
        value={year}
        onChange={setYear}
        className="!min-h-[36px] !py-1 !text-sm !h-[36px]"
        containerProps={{ className: "min-w-0 w-full" }}
      >
        {years.map((y) => (
          <Option key={y} value={y}>{y}</Option>
        ))}
      </Select>
    </div>
  );
};

export default DateSelect;
