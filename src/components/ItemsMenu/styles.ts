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
  width: 100%;
`;

export const ItemSubList = styled.ul`
  display: none;
  position: absolute;
  width: 100%;
  left: 0;
  top: 45px;
  background-color: #fff;
  border-bottom: 2px solid #ec1415;
`;

export const ItemSubListTitle = styled.li`
  margin-top: 15px;
  list-style-type: none;
  font-size: 14px;
  color: red;
`;

export const Products = styled.div``;

export const ProductImg = styled.div`
  font-size: 26px;
  color: #2e2e2e;
`;

