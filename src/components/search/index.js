import "../search/search.styles.css";

const Search = ({ searchField, setSearchField }) => {
  return (
    <div>
      <form onChange={(e) => setSearchField(e.target.value)}>
        <div className="search">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Search for your country ..." />
        </div>
        {/* </form>
      <form> */}
        <div className="filter">
          <select>
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
    </div>
  );
};

export default Search;
