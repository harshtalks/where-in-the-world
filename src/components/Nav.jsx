import { Container, NavBar, Logo } from "../styles/nav.styles";
import ThemeChanger from "../components/ThemeChanger";
const Nav = () => {
  return (
    <Container>
      <NavBar>
        <Logo>Where in The World?</Logo>
        <ThemeChanger />
      </NavBar>
    </Container>
  );
};

export default Nav;
