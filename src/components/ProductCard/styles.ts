import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 30px 0px;
  justify-content: center;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 220px;
  height: 420px;
  padding: 0px 10px;

  @media (max-width: 768px) {
    width: 180px;
    height: 380px;
  }
`;

export const ImgContainer = styled.div`
  text-align: center;
`;

export const ProductImage = styled.img`
  height: 165px;
  width: 180px;
  cursor: pointer;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Title = styled.span`
  text-align: center;
  color: #2e2e2e;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Price = styled.span`
  color: #2e2e2e;
  font-weight: bold;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Installments = styled.span`
  color: #2e2e2ea1;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ProductButton = styled.button`
  margin-top: 10px;
  background-color: #ec1415;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  border: none;
  width: 100%;
  height: 35px;
  border-radius: 5px;
  cursor: pointer;
  transition: all ease 0.3s;

  :hover {
    transform: scale(1.04);
  }
`;
