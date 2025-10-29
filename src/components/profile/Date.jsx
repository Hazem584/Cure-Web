import React, { useState } from "react";
import { Select, Option } from "@material-tailwind/react";

const DateSelect = () => {
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = Array.from({ length: 100 }, (_, i) => (2025 - i).toString());

  const [day, setDay] = useState("1");
  const [month, setMonth] = useState("January");
  const [year, setYear] = useState("2000");

  return (
    
    <div className="grid grid-cols-3 gap-2 mb-6 max-sm:grid-cols-1">
  <Select
    label="Day"
    color="blue"
    value={day}
    onChange={setDay}
    className="!h-[36px] !text-sm"
    containerProps={{
      className: "!min-w-[80px] !w-full"
    }}
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
    className="!h-[36px] !text-sm"
    containerProps={{
      className: "!min-w-[80px] !w-full"
    }}
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
    className="!h-[36px] !text-sm"
    containerProps={{
      className: "!min-w-[80px] !w-full"
    }}
  >
    {years.map((y) => (
      <Option key={y} value={y}>{y}</Option>
    ))}
  </Select>
</div>

  );
};

export default DateSelect;
