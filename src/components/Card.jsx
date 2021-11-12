import {
  Container,
  Image,
  Text,
  CountryName,
  Details
} from "../styles/card.styles";
const Card = ({ name, population, flag, region, capital }) => {
  return (
    <Container>
      <Image>
        <img src={flag} alt={`${flag}-name`} />
      </Image>
      <Text>
        <CountryName>{name}</CountryName>
        <Details>
          <div className="detail">
            <p>Population</p>
            <p className="output">{population}</p>
          </div>
          <div className="detail">
            <p>Region</p>
            <p className="output">{region}</p>
          </div>
          <div className="detail">
            <p>Capital</p>
            <p className="output">{capital}</p>
          </div>
        </Details>
      </Text>
    </Container>
  );
};

export default Card;
