import { BiMoon, BiSun } from "react-icons/bi";
import { useEffect } from "react";

const Header = ({ mode, toggleMode }) => {
  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  console.log(mode);
  return (
    <header className="w-full  shadow-md">
      <div className="container  h-20   mx-auto px-4 xl:px-0 flex justify-between items-center ">
        <h1 className="text-slate-100 dark:text-white  sm:text-lg md:text-xl font-bold  text-very-dark-blue-text dark:text-very-light-gray ">
          Where in the world?
        </h1>
        <div
          className="flex jutify-between items-center gap-1 cursor-pointer"
          onClick={toggleMode}
        >
          {mode === "light" ? (
            <BiMoon size={25} color="black" />
          ) : (
            <BiSun size={25} color="white" />
          )}
          <p className="text-very-dark-blue dark:text-white font-semibold text-sm sm:text-sm md:text-base text-very-dark-blue-text dark:text-very-light-gray">
            {mode === "light" ? "Dark Mode  " : " Light Mode"}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
