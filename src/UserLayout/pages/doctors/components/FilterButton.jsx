import React from "react";

const FilterButton = ({ value, onChange }) => {
  const buttons = ["Male", "Female"];
  return (
    <div className="flex gap-3  [@media(max-width:639px)]:gap-2 [@media(max-width:639px)]:flex-wrap">
      {buttons.map((buttonValue) => (
        <button
          key={buttonValue}
          type="button"
          onClick={() =>
            onChange(value === buttonValue ? "" : buttonValue)
          }
          className={` w-auto h-10 border border-blue-gray-300 px-4 py-2 rounded-lg font-small [@media(max-width:639px)]:px-4  
            ${
              value === buttonValue
                ? "bg-[#145DB8] text-white dark:text-dark-textOnDark dark:bg-dark-bgSurface border-2 border-[#145DB8] "
                : "bg-[#FFFFFF] text-[#6D7379] border-[#FFFFFF] dark:bg-dark-darkBg dark:border-2 dark:border-dark-borderDark  hover:text-blue-600"
            }`}
        >
          {buttonValue}
        </button>
      ))}
    </div>
  );
};

export default FilterButton;
