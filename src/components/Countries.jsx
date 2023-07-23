import Card from "./Card";

const Countries = ({ countries }) => {
  return (
    <div className="container mx-auto mt-6 lg:mt-12 px-4 xl:px-0 flex flex-col md:flex-row justify-between flex-wrap gap-10 lg:gap-14">
      {countries?.map((country, id) => (
        <Card key={id} country={country} />
      ))}
    </div>
  );
};

export default Countries;
