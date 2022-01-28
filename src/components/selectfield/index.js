const SelectField = ({ handleSelect }) => {
  return (
    <form>
      <div className="filter">
        <select onChange={handleSelect}>
          Filter by Region
          <option value="" disabled selected>
            Filter by Region
          </option>
          <option value="africa">Africa</option>
          <br />
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </form>
  );
};

export default SelectField;
