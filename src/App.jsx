import "./index.css";
import { useState } from "react";
import Header from "./layout/Header";
import SearchBar from "./components/SearchBar";
import data from "./data/data.json";
import Countries from "./components/Countries";

function App() {
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    setMode((curr) => (curr === "dark" ? "light" : "dark"));
  };

  return (
    <div className="h-full dark:bg-dark-blue">
      <Header mode={mode} toggleMode={toggleMode} />
      <main className="h-full  bg-very-light-gray dark:bg-very-dark-blue-bg   mt-1 pt-6  mx-auto   ">
        <SearchBar />
        <Countries countries={data} />
      </main>
    </div>
  );
}

export default App;
