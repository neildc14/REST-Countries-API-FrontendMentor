import PropTypes from "prop-types";

const Card = ({ country }) => {
  return (
    <div className=" mx-auto rounded-md shadow-md  dark:bg-dark-blue overflow-hidden w-64 sm:w-52 ">
      <img
        src={country.flags.png}
        alt="flag"
        className="overflow-hidden h-44 w-full sm:h-40"
      />
      <div className="p-6 dark:text-very-light-gray">
        <h2 className="font-bold font-lg pb-2">{country.name}</h2>
        <p className="font-semibold">
          Population{" "}
          <span className="font-base text-dark-gray font-thin">
            {country.population}
          </span>
        </p>
        <p className="font-semibold">
          Region{" "}
          <span className="font-base text-dark-gray font-thin">
            {country.region}
          </span>
        </p>
        <p className="font-semibold">
          Capital{" "}
          <span className="font-base text-dark-gray font-thin">
            {country.capital}
          </span>
        </p>
      </div>
    </div>
  );
};

Card.PropTypes = {
  country: PropTypes.array.isRequired,
};
export default Card;
