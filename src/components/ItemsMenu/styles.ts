import styled from "styled-components";

export const Container = styled.div`
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

export const ItemSubListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  width: 100%;

  img {
    height: 100%;
    width: 100%;
  }
`;

export const ItemSubList = styled.ul`
  display: none;
  position: absolute;
  width: 100%;
  left: 0;
  top: 100%;
  background-color: #fff;
  border-bottom: 2px solid #ec1415;
`;

export const ItemSubListTitle = styled.li`
  margin-top: 15px;
  list-style-type: none;
  font-size: 18px;
  color: #ec1415;
  transition: 0.4s;
  cursor: pointer;

  :hover {
    transform: translateX(10px);
  }
`;

export const Products = styled.div`
  padding: 20px 50px;
`;

export const ProductImg = styled.div`
  width: 50%;
`;

