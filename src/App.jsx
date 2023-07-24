import "./index.css";
import { useState } from "react";
import Header from "./layout/Header";
import ShowCountries from "./layout/ShowCountries";
import CountryDetails from "./context/CountryDetails";
import ShowCountryDetails from "./layout/ShowCountryDetails";

function App() {
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    setMode((curr) => (curr === "dark" ? "light" : "dark"));
  };

  const [pickedCountry, setPickedCountry] = useState({
    details: {},
    layoutIndex: 0,
  });

  const arrayLayouts = [
    <ShowCountries key={0} />,
    <ShowCountryDetails key={1} country={pickedCountry.details} />,
  ];

  console.log(pickedCountry);
  return (
    <div className="h-full dark:bg-dark-blue">
      <Header mode={mode} toggleMode={toggleMode} />
      <CountryDetails.Provider value={{ pickedCountry, setPickedCountry }}>
        {arrayLayouts[pickedCountry.layoutIndex]}
      </CountryDetails.Provider>
    </div>
  );
}

export default App;
