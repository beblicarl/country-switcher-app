import CardContent from "../card-content";
import "../cards/cards.styles.css";

const Cards = ({ filteredCountries }) => {
  return (
    <div>
      <CardContent countries={filteredCountries} />
    </div>
  );
};

export default Cards;
