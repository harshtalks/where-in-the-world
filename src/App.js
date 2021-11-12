import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import { ThemeLight, ThemeDark } from "./theme/theme";
import { GlobalStyles } from "./styles/global.styles";
import { useThemeContext } from "./context/ThemeContext";
import Loader from "./components/Loader";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import Actions from "./components/Actions";
import Details from "./components/Details";
import useCountry from "./hooks/useCountry";
import { useState } from "react";
import { Routes, Route, Switch } from "react-router-dom";
export default function App() {
  const [search, setSearch] = useState("");
  const [whichRegion, setWhichregion] = useState(null);
  const [theme] = useThemeContext();
  const { loading, data, error } = useCountry(whichRegion);
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.google.com/specimen/Nunito+Sans"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={theme === "dark" ? ThemeDark : ThemeLight}>
        <GlobalStyles />
        <Nav />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                {" "}
                <Actions
                  whichRegion={whichRegion}
                  setWhichregion={setWhichregion}
                  setSearch={setSearch}
                  search={search}
                />
                {console.log(data)}
                {loading ? (
                  <Loader />
                ) : (
                  <Cards
                    data={data}
                    whichRegion={whichRegion}
                    search={search}
                  />
                )}{" "}
              </>
            }
          />
          <Route path="/:id" element={<Details />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
