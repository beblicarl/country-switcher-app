const SearchField = ({ handleChange }) => {
  return (
    <div>
      <form>
        <div className="search">
          <i class="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search for your country ..."
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchField;
