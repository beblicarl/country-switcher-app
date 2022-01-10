import SearchField from "../searchfield";
import SelectField from "../selectfield";
import "./filter.styles.css";

const Filter = ({ handleChange, handleSelect }) => {
  return (
    <div className="container">
      <SearchField handleChange={handleChange} />
      <SelectField handleSelect={handleSelect} />
    </div>
  );
};

export default Filter;
