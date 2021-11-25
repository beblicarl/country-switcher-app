import "../search/search.styles.css";

const Search = () => {
  return (
    <div>
      <form>
        <div className="search">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Search for your country ..." />
        </div>
        <div className="filter">
          <select>
            <option value="" disabled selected>
              Filter by Region
            </option>
            <option value="africa">Africa</option>
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
