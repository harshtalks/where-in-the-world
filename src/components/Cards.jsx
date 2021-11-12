import Card from "./Card";
import { Container, Content } from "../styles/cards.styles";
import { Link } from "react-router-dom";
const Cards = ({ data, search }) => {
  return (
    <Container>
      <Content>
        {data &&
          data
            .filter((el) => {
              if (!search) return el;
              else {
                if (search.toLowerCase() === el.name.common.toLowerCase())
                  return el;
              }
            })
            .map((el) => (
              <Link key={el.cca2} to={`/${el.cca2}`}>
                <Card
                  name={el.name.common}
                  population={el.population}
                  region={el.region}
                  flag={el.flags.svg}
                  capital={el.capital}
                />
              </Link>
            ))}
      </Content>
    </Container>
  );
};

export default Cards;
