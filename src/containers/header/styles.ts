import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  color: #ffffffe5;
  font-size: 16px;
  transition: all ease 0.4s;

  :hover {
    color: #fff;
    text-decoration: underline;
  }

  svg {
    height: 24px;
    width: 24px;
  }
`;

export const NavInfoBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ec1415;
  width: 100%;

  //Mobile
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 40px;
  width: 100%;
  max-width: 1170px;
`;

export const Info = styled.div`
  display: flex;
  gap: 20px;
`;

export const ClientArea = styled.div`
  display: flex;
  gap: 20px;
`;

export const LogoImg = styled.img``;

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
  width: 100%;
  list-style-type: none;
  background-color: #ec1415;
`;

export const ItemList = styled.li`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  padding: 10px 15px;

  a {
    color: #fff;
  }

  :hover {
    background: #fff;
    border-top: 4px solid #ec1415;
    border-radius: 15px 15px 0 0;

    a {
      color: red;
    }
  }

  :hover ul {
    display: block;
  }
`;

export const ItemSubList = styled.ul`
  display: none;
  position: absolute;
  width: 100%;
  left: 0;
  top: 45px;
  border-bottom: 2px solid #ec1415;
  background-color: #fff;
`;

export const ItemSubListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const Products = styled.div``;

export const ProductImg = styled.div`
  font-size: 26px;
  color: #2e2e2e;
`;

export const ItemSubListTitle = styled.li`
  margin-top: 15px;
  list-style-type: none;
  font-size: 14px;
  color: red;
`;
