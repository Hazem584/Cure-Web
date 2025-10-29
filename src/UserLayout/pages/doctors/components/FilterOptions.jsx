import React from "react";
import { Checkbox } from "@material-tailwind/react";
import FilterButton from "./FilterButton";

import { Select } from "@material-tailwind/react";

const FilterOptions = () => {
  return (
    <div className=" flex flex-col  [@media(max-width:719px)]:flex-col [@media(max-width:719px)]:gap-10 [@media(max-width:1400px)]:gap-20 [@media(max-width:1400px)]:flex-row  gap-10  ml-10  mb-10 mt-5">
      <div className=" flex flex-col gap-10 [@media(max-width:719px)]:gap-20 [@media(max-width:1400px)]:w-[40%] [@media(max-width:1400px)]:flex-row [@media(max-width:1400px)]:justify-between  ">
        <div className="flex flex-col ">
          <label className="  dark:text-dark-textSecondary">
            Avaliable Data
          </label>
          <Checkbox id="Today" color="blue" label="Today" ripple={true} />
          <Checkbox
            id="Tomorrow"
            color="blue"
            label="Tomorrow"
            ripple={false}
          />
        </div>

        <div>
          <h1 className="pb-5  dark:text-dark-textSecondary">Gender</h1>
          <FilterButton />
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
          />
          <Checkbox
            id="Home Visit"
            color="blue"
            label="Home Visit"
            ripple={false}
          />
        </div>
        <div className="bg-gray-100 dark:bg-black rounded-lg p-1 ">
          <Select
            className="!bg-white dark:!bg-gray-800 !text-black dark:!text-gray-200"
            label="Sort "
          >
            <Checkbox
              c
              color="blue"
              id="Most recommended"
              label="Most recommended "
              ripple={true}
            />
            <Checkbox
              color="blue"
              id="Price Low to high"
              label="Price Low to high"
              ripple={false}
            />
            <Checkbox
              color="blue"
              id="Price High to low"
              label="Price High to low"
              ripple={false}
            />
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;
