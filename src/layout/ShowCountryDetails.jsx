import React, { useContext } from "react";
import CountryDetails from "../context/CountryDetails";
import { BiArrowBack } from "react-icons/bi";
import PropTypes from "prop-types";

const ShowCountryDetails = ({ country }) => {
  const { setPickedCountry } = useContext(CountryDetails);
  console.log(country);
  const onBackClick = () => {
    setPickedCountry({ details: {}, layoutIndex: 0 });
  };
  return (
    <main className="h-full bg-very-light-gray dark:bg-very-dark-blue-bg   mt-1 pt-6  mx-auto   ">
      <div className="container mx-auto mt-6 lg:mt-12 px-4 xl:px-0 ">
        <button
          className="px-6 py-2 inline-flex items-center gap-2 shadow-md dark:shadow-lg font-semibold dark:text-very-light-gray"
          onClick={onBackClick}
        >
          <BiArrowBack size={20} color="white" />
          Back
        </button>
        <section className="mt-14 flex  flex-wrap flex-col md:flex-row justify-between gap-10 lg:gap-14">
          <img
            src={country?.flags?.png}
            className="w-full h-44 shadow-md"
            alt="country flag"
          />
          <div>
            <div>
              <div className="mt-2 dark:text-very-light-gray">
                <h2 className="font-bold font-lg pb-2">{country.name}</h2>
                <p className="font-base">
                  Native Name:{" "}
                  <span className="font-base text-dark-gray font-thin">
                    {country?.nativeName}
                  </span>
                </p>
                <p className="font-base">
                  Population:{" "}
                  <span className="font-base text-dark-gray font-thin">
                    {country?.population}
                  </span>
                </p>
                <p className="font-base">
                  Region:{" "}
                  <span className="font-base text-dark-gray font-thin">
                    {country?.region}
                  </span>
                </p>
                <p className="font-base">
                  Sub Region:{" "}
                  <span className="font-base text-dark-gray font-thin">
                    {country?.subregion}
                  </span>
                </p>
                <p className="font-base">
                  Capital:{" "}
                  <span className="font-base text-dark-gray font-thin">
                    {country?.capital}
                  </span>
                </p>
              </div>{" "}
              <div className="mt-10 dark:text-very-light-gray">
                <p className="font-base">
                  Top Level Domain:{" "}
                  <span className="font-base text-dark-gray font-thin">
                    {country?.topLevelDomain}
                  </span>
                </p>
                <p className="font-base">
                  Currencies:{" "}
                  {
                    <span className="font-base text-dark-gray font-thin">
                      {country?.currencies[0].name}
                    </span>
                  }
                </p>
                <p className="font-base">
                  Languages:{" "}
                  {
                    <span className="font-base text-dark-gray font-thin">
                      {country?.languages[0].name}
                    </span>
                  }
                </p>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="font-lg font-semibold dark:text-very-light-gray">
                Border Countries:
              </h2>
              <div className="mt-4 flex flex-row flex-wrap justify-start gap-4">
                {country.borders ? (
                  country?.borders?.map((border, i) => (
                    <button
                      key={i}
                      className="px-4 shadow-sm dark:bg-dark-blue dark:text-very-light-gray"
                    >
                      {border}
                    </button>
                  ))
                ) : (
                  <p className="dark:text-very-light-gray">No borders.</p>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

ShowCountryDetails.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    flags: PropTypes.shape({
      png: PropTypes.string.isRequired,
    }),
    nativeName: PropTypes.string,
    population: PropTypes.number,
    region: PropTypes.string,
    subregion: PropTypes.string,
    capital: PropTypes.string,
    topLevelDomain: PropTypes.string,
    currencies: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
    languages: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
    borders: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default React.memo(ShowCountryDetails);
