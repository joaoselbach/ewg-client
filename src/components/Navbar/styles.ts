import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
  width: 100%;
  max-width: 1170px;

  //Mobile
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    background-color: #ec1415;
    padding: 20px 0px;
  }
`;

export const LogoImgHamburguer = styled.img`
  height: 45px;
  width: 70px;
  cursor: pointer;
`;

export const LogoImg = styled.img``;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin: 0px 40px;

  //Mobile
  @media (max-width: 768px) {
    margin-top: 20px;
    width: 90%;
  }

  svg {
    cursor: pointer;
    position: absolute;
    right: 0;
    margin-right: 5px;
    height: 32px;
    width: 32px;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  border-radius: 10px;
  border: 3px solid #ec1415;
  font-size: 14px;
  color: #999;

  ::placeholder {
    color: #999;
  }

  :focus {
    outline: none;
  }
`;

export const IconContainer = styled.div`
  svg {
    cursor: pointer;
    width: 42px;
    height: 42px;
    transition: 0.4s all ease;

    :hover {
      transform: scale(1.04);
    }

    //Mobile
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  //Mobile
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
  }

  img {
    cursor: pointer;
  }

  svg {
    width: 40px;
    height: 40px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  width: 100%;

  //Mobile
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ItemsMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  list-style-type: none;
  background-color: #ec1415;
  width: 100%;
`;

export const HamburguerMenu = styled.div`
  position: absolute;
  display: none;
  left: 0;
  top: 0;
  background-color: #fff;
  width: 100%;
  height: 100%;
  z-index: 999;
  opacity: 0;
  transform: translateX(-800px);
  transition: 1s;

  //Mobile
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }

  &.hamburguerMenuActive {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transform: translateX(0);
    opacity: 1;
  }
`;

export const MenuHeader = styled.div`
  background-color: #ec1415;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const HamburguerButton = styled.div`
  cursor: pointer;
`;

export const CloseButton = styled.div`
  z-index: 99;
  cursor: pointer;
`;

export const ProductsSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  margin-top: 70px;
  cursor: pointer;
`;

export const Category = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 3px;
  border: none;
  background-color: #ec1415;
  width: 100%;
  opacity: 1;
  cursor: pointer;
`;

export const SectionTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  left: 0;
  background-color: #fff;
  overflow: hidden;
  height: 0px;
  opacity: 1;
  transition: all ease 0.3s;

  &.dropdownActive {
    height: 175px;
  }

  &.dropdownUnactive {
    height: 0px;
  }
`;

export const ProductTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #ec1415;
  padding: 20px;
  transition: all ease 0.3s;

  :hover {
    transform: translateX(10px);
    color: #ea2728;
  }
`;

export const Product = styled.span`
  cursor: pointer;
  font-size: 14px;
  transition: all ease 0.4s;
  width: 100%;
  padding: 0px 20px;
  color: #2e2e2e;

  :hover {
    transform: translateX(10px);
    color: #ec1415;
  }
`;
