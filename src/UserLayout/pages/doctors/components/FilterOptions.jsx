import React from "react";
import { Checkbox } from "@material-tailwind/react";
import FilterButton from "./FilterButton";

const FilterOptions = ({
  availability,
  onAvailabilityChange,
  gender,
  onGenderChange,
  consultationTypes,
  onConsultationTypeChange,
  sortOption,
  onSortChange,
}) => {
  const toggleAvailability = (value) => {
    const next = new Set(availability);
    if (next.has(value)) {
      next.delete(value);
    } else {
      next.add(value);
    }
    onAvailabilityChange(Array.from(next));
  };

  const toggleConsultationType = (value) => {
    const next = new Set(consultationTypes);
    if (next.has(value)) {
      next.delete(value);
    } else {
      next.add(value);
    }
    onConsultationTypeChange(Array.from(next));
  };

  return (
    <div className=" flex flex-col  [@media(max-width:719px)]:flex-col [@media(max-width:719px)]:gap-10 [@media(max-width:1400px)]:gap-20 [@media(max-width:1400px)]:flex-row  gap-10  ml-10  mb-10 mt-5">
      <div className=" flex flex-col gap-10 [@media(max-width:719px)]:gap-20 [@media(max-width:1400px)]:w-[40%] [@media(max-width:1400px)]:flex-row [@media(max-width:1400px)]:justify-between  ">
        <div className="flex flex-col ">
          <label className="  dark:text-dark-textSecondary">
            Available Date
          </label>
          <Checkbox
            id="Today"
            color="blue"
            label="Today"
            ripple={true}
            checked={availability.includes("today")}
            onChange={() => toggleAvailability("today")}
          />
          <Checkbox
            id="Tomorrow"
            color="blue"
            label="Tomorrow"
            ripple={false}
            checked={availability.includes("tomorrow")}
            onChange={() => toggleAvailability("tomorrow")}
          />
        </div>

        <div>
          <h1 className="pb-5  dark:text-dark-textSecondary">Gender</h1>
          <FilterButton value={gender} onChange={onGenderChange} />
        </div>
      </div>
      <div className=" flex flex-col gap-10 [@media(max-width:719px)]:gap-20  [@media(max-width:1400px)]:flex-row [@media(max-width:1400px)]:w-[40%] [@media(max-width:1400px)]:mr-10 [@media(max-width:1400px)]:justify-between">
        <div className="flex flex-col  dark:text-dark-textSecondary">
          <label>Consultation Type</label>
          <Checkbox
            id="In-clinic"
            color="blue"
            label="In-clinic"
            ripple={true}
            checked={consultationTypes.includes("in-clinic")}
            onChange={() => toggleConsultationType("in-clinic")}
          />
          <Checkbox
            id="Home Visit"
            color="blue"
            label="Home Visit"
            ripple={false}
            checked={consultationTypes.includes("home visit")}
            onChange={() => toggleConsultationType("home visit")}
          />
        </div>
        <div className="bg-gray-100 dark:bg-black rounded-lg p-1 ">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 px-2 pt-2">
            Sort
          </label>
          <select
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-dark-borderDark dark:bg-dark-bgSurface dark:text-dark-textOnDark"
          >
            <option value="">None</option>
            <option value="recommended">Most recommended</option>
            <option value="priceLowHigh">Price low to high</option>
            <option value="priceHighLow">Price high to low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;
