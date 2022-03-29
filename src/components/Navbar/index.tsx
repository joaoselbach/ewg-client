import { useState } from "react";

import SearchIcon from "../../assets/search.svg";
import CartDesktop from "../../assets/cartDesktop.svg";
import CartMobile from "../../assets/cartMobile.svg";
import HamburguerMenuIcon from "../../assets/hamburguerMenu.svg";
import CloseIcon from "../../assets/closeIcon.svg";
import ArrowDown from "../../assets/arrowDown.svg";
import Logo from "../../assets/logo.png";

import {
  Category,
  CloseButton,
  Container,
  HamburguerButton,
  HamburguerMenu,
  IconContainer,
  ImgContainer,
  LogoImg,
  LogoImgHamburguer,
  MenuHeader,
  Product,
  ProductContainer,
  ProductsSection,
  ProductTitle,
  SearchBar,
  SearchBarContainer,
  SectionTitle,
} from "./styles";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [sectionActive, setSectionActive] = useState(false);
  const [showCategoryProducts, setShowCategoryProducts] = useState("");

  console.log(showCategoryProducts);

  const toggleDropdown = (value) => {
    if (!showCategoryProducts) {
      setShowCategoryProducts(value);
    } else {
      setShowCategoryProducts("");
    }
  };

  return (
    <Container>
      <HamburguerMenu
        className={isActive ? "hamburguerMenuActive" : ""}
      >
        <MenuHeader>
          <CloseButton onClick={() => setIsActive(!isActive)}>
            {isActive ? <CloseIcon /> : ""}
          </CloseButton>
          <LogoImgHamburguer src={Logo} />
          <CartMobile width={40} />
        </MenuHeader>
        <ProductsSection>
          <Category onClick={() => toggleDropdown("metais")}>
            <SectionTitle>Metais</SectionTitle>
            <ArrowDown />
          </Category>
          <ProductContainer
            className={
              showCategoryProducts === "metais"
                ? "dropdownActive"
                : "dropdownUnactive"
            }
          >
            <ProductTitle>Metais para Banheiros</ProductTitle>
            <Product>Misturadores</Product>
            <Product>Monocomando</Product>
            <Product>Torneiras</Product>
            <Product>Duchas</Product>
          </ProductContainer>
          <Category onClick={() => toggleDropdown("chuveiro")}>
            <SectionTitle>Chuveiro</SectionTitle>
            <ArrowDown />
          </Category>
          <ProductContainer
            className={
              showCategoryProducts === "chuveiro"
                ? "dropdownActive"
                : "dropdownUnactive"
            }
          >
            <ProductTitle>Metais para Banheiros</ProductTitle>
            <Product>Misturadores</Product>
            <Product>Monocomando</Product>
            <Product>Torneiras</Product>
            <Product>Duchas</Product>
          </ProductContainer>
        </ProductsSection>
      </HamburguerMenu>

      <ImgContainer>
        <HamburguerButton onClick={() => setIsActive(!isActive)}>
          <HamburguerMenuIcon />
        </HamburguerButton>
        <LogoImg src={Logo} />
        <CartMobile />
      </ImgContainer>
      <SearchBarContainer>
        <SearchBar placeholder="Digite aqui" />
        <SearchIcon />
      </SearchBarContainer>
      <IconContainer>
        <CartDesktop />
      </IconContainer>
    </Container>
  );
};

export default NavBar;
