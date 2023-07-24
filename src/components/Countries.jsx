import Card from "./Card";
import PropTypes from "prop-types";

const Countries = ({ countries }) => {
  return (
    <div className="container mx-auto mt-6 lg:mt-12 px-4 xl:px-0 flex  flex-wrap flex-col md:flex-row justify-between gap-10 lg:gap-14">
      {countries?.map((country, id) => (
        <Card key={id} country={country} />
      ))}
    </div>
  );
};

Countries.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      flags: PropTypes.shape({
        png: PropTypes.string.isRequired,
      }).isRequired,
      population: PropTypes.number.isRequired,
      region: PropTypes.string.isRequired,
      capital: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Countries;
