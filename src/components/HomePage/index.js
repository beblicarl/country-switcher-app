import Cards from "../cards";
import Filter from "../filter";

const HomePage = ({ handleChange, handleSelect, filteredCountries }) => {
  return (
    <div>
      <Filter handleChange={handleChange} handleSelect={handleSelect} />
      <Cards filteredCountries={filteredCountries} />
    </div>
  );
};

export default HomePage;
