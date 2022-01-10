import "./App.css";
import Cards from "./components/cards";
import Header from "./components/header";

import axios from "axios";
import { useEffect, useState } from "react";
import Filter from "./components/filter";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [selectField, setSelectField] = useState("");

  const handleChange = (e) => {
    setSearchField(e.target.value);
    console.log(searchField);
  };

  const handleSelect = (e) => {
    setSelectField(e.target.value);
  };

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(searchField.toLowerCase()) &&
      country.region.toLowerCase().includes(selectField.toLowerCase())
  );
  return (
    <div className="App">
      <Header />
      <Filter handleChange={handleChange} handleSelect={handleSelect} />
      <Cards filteredCountries={filteredCountries} />
    </div>
  );
}

export default App;
