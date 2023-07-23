import React from "react";
const SearchBar = ({ setFilterRegion, setSearchCountry, searchCountry }) => {
  const changeRegion = (e) => {
    setFilterRegion(e.target.value);
  };

  const searchForCountry = (e) => {
    setSearchCountry(e.target.value);
  };

  return (
    <div className=" container  mx-auto px-4 xl:px-0  flex flex-col sm:flex-row md:flex-row lg:flex-row sm: justify-between gap-1">
      <input
        type="search"
        name="search"
        id="search"
        value={searchCountry}
        placeholder="Search for a country"
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 py-2 px-2  shadow-sm rounded-md dark:bg-dark-blue dark:text-very-light-gray "
        onChange={searchForCountry}
      />

      <select
        name="regious"
        className="py-2  px-2 mt-4 sm:mt-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4   shadow-sm rounded-md dark:bg-dark-blue dark:text-very-light-gray "
        onClick={changeRegion}
      >
        {[
          "Filter By Region",
          "Africa",
          "America",
          "Asia",
          "Europe",
          "Oceania",
        ].map((region) => (
          <option
            value={region}
            key={region}
            className="rounder-md shadow-sm  outline-none  outline-transparent border-transparent dark:text-very-light-gray  "
          >
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.memo(SearchBar);
