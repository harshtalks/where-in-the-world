import { Container, Content, Search, Region } from "../styles/actions.styles";
import { ReactComponent as SearchIcon } from "../svg/search.svg";
import { ReactComponent as Down } from "../svg/down.svg";
import { useState } from "react";
const regions = [
  {
    id: 1,
    name: "Africa"
  },
  {
    id: 2,
    name: "America"
  },
  {
    id: 3,
    name: "Asia"
  },
  {
    id: 4,
    name: "Europe"
  },
  {
    id: 5,
    name: "Oceania"
  },
  {
    id: 6,
    name: "All World"
  }
];

const Actions = ({ search, setSearch, whichregion, setWhichregion }) => {
  const [isRegionOpened, setIsRegionOpened] = useState(false);
  const onClickToggle = (value) => {
    if (value === "All World") setWhichregion(null);
    else setWhichregion(value);
    setSearch("");
  };
  const toggleRegion = () => setIsRegionOpened(() => !isRegionOpened);
  return (
    <Container>
      <Content>
        <Search>
          <SearchIcon />
          <input
            type="text"
            placeholder="Search for a country.."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Search>
        <Region onClick={toggleRegion}>
          <div className="regionSelector">Select Region</div>
          <Down />
          {isRegionOpened && (
            <div className="regions">
              {regions.map((el) => (
                <p key={el.id} onClick={() => onClickToggle(el.name)}>
                  {el.name}
                  {console.log(whichregion)}
                </p>
              ))}
            </div>
          )}
        </Region>
      </Content>
    </Container>
  );
};

export default Actions;
