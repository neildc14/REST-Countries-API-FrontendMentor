import "./index.css";
import { useState } from "react";
import Header from "./layout/Header";
import SearchBar from "./layout/SearchBar";

function App() {
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    setMode((curr) => (curr === "dark" ? "light" : "dark"));
  };

  return (
    <div className="h-screen dark:bg-dark-blue">
      <Header mode={mode} toggleMode={toggleMode} />
      <main className="h-full  bg-very-light-gray dark:bg-dark-blue  mt-1 pt-6  mx-auto   ">
        <SearchBar />
      </main>
    </div>
  );
}

export default App;
