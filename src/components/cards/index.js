import "../cards/cards.styles.css";
// import flag from "../../assests/Images/flag.jpg";

const Cards = ({ countries }) => {
  return (
    <div className="card-container">
      {countries.map((country) => (
        <div className="card" key={country.tId}>
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
        </div>
      ))}

      {/* <div className="card">
        <img src={flag} alt="flag" />

        <div className="card-information">
          <h2>United Kingdom</h2>
          <div className="card-detail">
            <h3>
              {" "}
              Population :<span> 3,000,000</span>{" "}
            </h3>
            <h3>
              {" "}
              Region :<span> Europe</span>{" "}
            </h3>
            <h3>
              {" "}
              Capital :<span> London</span>{" "}
            </h3>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={flag} alt="flag" />

        <div className="card-information">
          <h2>United Kingdom</h2>
          <div className="card-detail">
            <h3>
              {" "}
              Population :<span> 3,000,000</span>{" "}
            </h3>
            <h3>
              {" "}
              Region :<span> Europe</span>{" "}
            </h3>
            <h3>
              {" "}
              Capital :<span> London</span>{" "}
            </h3>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={flag} alt="flag" />

        <div className="card-information">
          <h2>United Kingdom</h2>
          <div className="card-detail">
            <h3>
              {" "}
              Population :<span> 3,000,000</span>{" "}
            </h3>
            <h3>
              {" "}
              Region :<span> Europe</span>{" "}
            </h3>
            <h3>
              {" "}
              Capital :<span> London</span>{" "}
            </h3>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={flag} alt="flag" />

        <div className="card-information">
          <h2>United Kingdom</h2>
          <div className="card-detail">
            <h3>
              {" "}
              Population :<span> 3,000,000</span>{" "}
            </h3>
            <h3>
              {" "}
              Region :<span> Europe</span>{" "}
            </h3>
            <h3>
              {" "}
              Capital :<span> London</span>{" "}
            </h3>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={flag} alt="flag" />

        <div className="card-information">
          <h2>United Kingdom</h2>
          <div className="card-detail">
            <h3>
              {" "}
              Population :<span> 3,000,000</span>{" "}
            </h3>
            <h3>
              {" "}
              Region :<span> Europe</span>{" "}
            </h3>
            <h3>
              {" "}
              Capital :<span> London</span>{" "}
            </h3>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={flag} alt="flag" />

        <div className="card-information">
          <h2>United Kingdom</h2>
          <div className="card-detail">
            <h3>
              {" "}
              Population :<span> 3,000,000</span>{" "}
            </h3>
            <h3>
              {" "}
              Region :<span> Europe</span>{" "}
            </h3>
            <h3>
              {" "}
              Capital :<span> London</span>{" "}
            </h3>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={flag} alt="flag" />

        <div className="card-information">
          <h2>United Kingdom</h2>
          <div className="card-detail">
            <h3>
              {" "}
              Population :<span> 3,000,000</span>{" "}
            </h3>
            <h3>
              {" "}
              Region :<span> Europe</span>{" "}
            </h3>
            <h3>
              {" "}
              Capital :<span> London</span>{" "}
            </h3>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Cards;
