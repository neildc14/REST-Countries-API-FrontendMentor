import "./index.css";
import { useState, useEffect } from "react";
import Header from "./layout/Header";
import SearchBar from "./components/SearchBar";
import data from "./data/data.json";
import Countries from "./components/Countries";

function App() {
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    setMode((curr) => (curr === "dark" ? "light" : "dark"));
  };

  const [filterRegion, setFilterRegion] = useState("Filter By Region");
  const [filteredCountry, setFilteredCountry] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [searchTimeOut, setSearchTimeOut] = useState(null);

  useEffect(() => {
    const filteredCountryFromRegion = data?.filter(
      (data) =>
        data.region.toLocaleLowerCase() === filterRegion?.toLocaleLowerCase()
    );

    setFilteredCountry(filteredCountryFromRegion);
  }, [filterRegion]);

  useEffect(() => {
    if (searchTimeOut) {
      clearTimeout(searchTimeOut);
    }

    const newTimeOut = setTimeout(() => {
      const filteredCountryFromSearch = data?.filter((data) => {
        return data?.name
          .toLocaleLowerCase()
          .includes(searchCountry.toLowerCase());
      });

      console.log(filteredCountryFromSearch, "search");
      setFilteredCountry(filteredCountryFromSearch);
    }, 500);

    if (searchCountry === "") setSearchTimeOut(data);
    setSearchTimeOut(newTimeOut);
  }, [searchCountry, searchTimeOut]);

  console.log(filteredCountry, searchCountry);
  return (
    <div className="h-full dark:bg-dark-blue">
      <Header mode={mode} toggleMode={toggleMode} />
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
    </div>
  );
}

export default App;
