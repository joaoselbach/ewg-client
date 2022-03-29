import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .swiper-button-prev,
  .swiper-button-next {
    cursor: pointer;
    display: block;
    color: black;
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 18px;
    font-weight: bold;
    color: #ec1415;
  }
`;

export const CarousselContainer = styled.div`
  width: 70%;
  border-top: 2px solid #ec1415;
  margin-bottom: 60px;

  .swiper-pagination-bullet {
    background-color: #2e2e2e50;
    border: 2px solid #ec1415;
    padding: 3px;

    //Mobile
    @media (max-width: 768px) {
      padding: 2px;
    }
  }

  .swiper-pagination-bullet-active {
    background-color: #ec1415;
  }

  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 0;
  }
`;

export const Delivery = styled.img`
  padding: 50px;
  width: 100%;
`;

export const SectionTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #2e2e2e;
  margin-top: 40px;
  max-width: 200px;
`;
