import { Link } from "react-router-dom";
import "../card-content/card-content.styles.css";

const CardContent = ({ countries }) => {
  return (
    <div className="card-container">
      {countries.map((country) => (
        <div className="card" key={country.cca3}>
          <Link
            to={`/country/${country.cca3}`}
            style={{ textDecoration: "none" }}
          >
            <img src={country.flags.png} alt="flag" />
            <div className="card-information">
              <h2>{country.name.common}</h2>
              <div className="card-detail">
                <h3>
                  {" "}
                  Population :
                  <span>
                    {" "}
                    {country.population
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>{" "}
                </h3>
                <h3>
                  {" "}
                  Region :<span> {country.region}</span>{" "}
                </h3>
                <h3>
                  {" "}
                  Capital :<span> {country.capital}</span>{" "}
                </h3>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CardContent;
