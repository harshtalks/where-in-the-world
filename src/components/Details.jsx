import { useParams, Link } from "react-router-dom";
import {
  Container,
  Content,
  Action,
  Button,
  DetailsDiv,
  Flag,
  CountryName,
  Detail,
  BorderCountries
} from "../styles/details.styles";
import useDetails from "../hooks/useDetails";
import Loader from "./Loader";
import { useState } from "react";
import { formatter } from "../helpers";
const Details = () => {
  const { id } = useParams();
  const { loading, data, error } = useDetails(id);
  return (
    <>
      {console.log(data)}
      {loading ? (
        <Loader />
      ) : (
        data.name && (
          <Container>
            <Content>
              <Action>
                <Button to="/">Back</Button>
              </Action>
              <DetailsDiv>
                <Flag>
                  <img src={data.flags.svg} alt={`${id}-flag`} />
                </Flag>
                <div className="mainContent">
                  <Detail>
                    <CountryName>{data.name.common}</CountryName>
                    <div className="flex">
                      <div className="left">
                        <div className="content">
                          <p>Official Name</p>
                          <p className="api">{data.name.official}</p>
                        </div>
                        <div className="content">
                          <p>Population</p>
                          <p className="api">{formatter(data.population)}</p>
                        </div>
                        <div className="content">
                          <p>Region</p>
                          <p className="api">{data.region}</p>
                        </div>
                        <div className="content">
                          <p>Sub Region</p>
                          <p className="api">{data.subregion}</p>
                        </div>
                        <div className="content">
                          <p>Capital</p>
                          <p className="api">{data.capital}</p>
                        </div>
                      </div>
                      <div className="right">
                        <div className="content">
                          <p>Top Level Domain</p>
                          <p className="api">{data.tld}</p>
                        </div>
                        <div className="content">
                          <p>Currencies</p>
                          {Object.getOwnPropertyNames(data.currencies).map(
                            (el) => (
                              <p key={el} className="api">
                                {el + " "}
                              </p>
                            )
                          )}
                        </div>
                        <div className="content">
                          <p>Languages</p>
                          {Object.values(data.languages).map((el) => (
                            <p className="api" key={el}>
                              {el + "  "}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Detail>
                  <BorderCountries>
                    <p>Border Countries: </p>
                    <div className="borders">
                      {data.borders.map((el) => (
                        <Link to={`/${el}`} key={el} className="border">
                          {el}
                        </Link>
                      ))}
                    </div>
                  </BorderCountries>
                </div>
              </DetailsDiv>
            </Content>
          </Container>
        )
      )}
    </>
  );
};

export default Details;
