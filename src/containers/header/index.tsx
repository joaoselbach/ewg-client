import NavBar from "../../components/Navbar";
import ItemsList from "../../components/ItemsMenu";

import {
  ClientArea,
  Container,
  Info,
  NavInfo,
  NavInfoBackground,
  Title,
} from "./styles";

import Phone from "../../assets/svg/phone.svg";
import Whatsapp from "../../assets/svg/whatsapp.svg";

const Header = () => {

  return (
    <Container>
      <NavInfoBackground>
        <NavInfo>
          <Info>
            <Title>Blog</Title>
            <Title>
              <Phone />
              (41) 3018-6275
            </Title>
            <Title>
              <Whatsapp />
              (41) 99677-2417
            </Title>
          </Info>
          <ClientArea>
            <Title>Entrar</Title>
            <Title>Meus Pedidos</Title>
          </ClientArea>
        </NavInfo>
      </NavInfoBackground>

      <NavBar />
      <ItemsList />
    </Container>
  );
};

export default Header;
