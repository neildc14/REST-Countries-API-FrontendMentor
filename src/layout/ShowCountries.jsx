import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Countries from "../components/Countries";
import data from "../data/data.json";

const ShowCountries = () => {
  const [filterRegion, setFilterRegion] = useState("Filter By Region");
  const [filteredCountry, setFilteredCountry] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");

  useEffect(() => {
    const filteredCountryFromRegion = data?.filter(
      (data) =>
        data.region.toLocaleLowerCase() === filterRegion?.toLocaleLowerCase()
    );

    setFilteredCountry(filteredCountryFromRegion);
  }, [filterRegion]);

  useEffect(() => {
    const filteredCountryFromSearch = data?.filter((data) => {
      return data?.name
        .toLocaleLowerCase()
        .includes(searchCountry.toLowerCase());
    });

    setFilteredCountry(filteredCountryFromSearch);

    if (searchCountry === "") {
      return;
    }
  }, [searchCountry]);

  return (
    <>
      <main className="h-full bg-very-light-gray dark:bg-very-dark-blue-bg   mt-1 pt-6  mx-auto   ">
        <SearchBar
          setFilterRegion={setFilterRegion}
          filterRegion={filterRegion}
          setSearchCountry={setSearchCountry}
          searchCountry={searchCountry}
        />
        <Countries
          countries={filteredCountry?.length !== 0 ? filteredCountry : data}
        />
      </main>
    </>
  );
};

export default ShowCountries;
