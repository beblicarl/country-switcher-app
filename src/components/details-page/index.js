import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../details-page/details-page.styles.css";
import { Link } from "react-router-dom";

const DetailsPage = () => {
  const [countries, setCountries] = useState([]);
  const { cca3 } = useParams();

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => {
        console.log(res.data);
        setCountries(res.data);
      })
      .catch((err) => {});
  }, []);

  const [country] = countries
    ? countries?.filter(
        (country) => country.alpha3Code.toLowerCase() === cca3.toLowerCase()
      )
    : [null];

  return (
    <div className="containers">
      <Link to="/" style={{ textDecoration: "none" }}>
        <button>
          {" "}
          <i class="fas fa-long-arrow-alt-left"></i> Back
        </button>
      </Link>

      {country && (
        <div className="content">
          <div className="flag">
            <img src={country.flags.png} alt="flag" />
          </div>
          <div className="detail">
            <div className="country-title">
              <h1>{country.name}</h1>
            </div>

            <div className="detail-container">
              <div className="content-details">
                <div>
                  <h3>
                    Native Name : <span>{country.nativeName}</span>
                  </h3>
                  <h3>
                    Population :{" "}
                    <span>
                      {country.population
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </span>
                  </h3>
                  <h3>
                    Region : <span>{country.region}</span>
                  </h3>
                  <h3>
                    Sub Region : <span>{country.subregion}</span>
                  </h3>
                  <h3>
                    Capital : <span>{country.capital}</span>
                  </h3>
                </div>
                <div>
                  <h3>
                    Top Level Domain : <span>{country.topLevelDomain[0]}</span>
                  </h3>
                  <h3>
                    Currencies :
                    <span>
                      {" "}
                      {country.currencies
                        ?.map((currency) => currency.name)
                        .join(",  ")}{" "}
                    </span>
                  </h3>
                  <h3>
                    Languages :
                    <span>
                      {" "}
                      {country.languages
                        ?.map((language) => language.name)
                        .join(", ")}{" "}
                    </span>
                  </h3>
                </div>
              </div>
              <br />
              <br />

              <h3>
                Border countries :
                {country.borders?.map((border) => (
                  <button key={border} to={`/country/${border}`}>
                    {
                      countries.find((country) => country.alpha3Code === border)
                        .name
                    }
                  </button>
                ))}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
