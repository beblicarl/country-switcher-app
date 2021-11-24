import "../search/search.styles.css";

const Search = () => {
  return (
    <div>
      <form>
        <div className="search">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Search for your country..." />
        </div>
      </form>
    </div>
  );
};

export default Search;
