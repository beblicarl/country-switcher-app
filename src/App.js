import "./App.css";
import Cards from "./components/cards";
import Header from "./components/header";
import Search from "./components/search";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [countries]);
  return (
    <div className="App">
      <Header />
      <Search searchField={searchField} setSearchField={setSearchField} />
      <Cards countries={countries} />
    </div>
  );
}

export default App;
