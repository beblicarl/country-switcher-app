import "./App.css";
import Header from "./components/header";
import axios from "axios";
import { useEffect, useState } from "react";
import DetailsPage from "./components/details-page";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";

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
      .catch((err) => {});
  }, []);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(searchField.toLowerCase()) &&
      country.region.toLowerCase().includes(selectField.toLowerCase())
  );
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <HomePage
              handleChange={handleChange}
              handleSelect={handleSelect}
              filteredCountries={filteredCountries}
            />
          }
        />
        <Route path="/country/:cca3" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
