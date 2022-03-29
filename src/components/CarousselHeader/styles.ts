import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;

  .swiper-button-prev,
  .swiper-button-next {
    cursor: pointer;
    display: block;
    color: #fff;

    //Mobile
    @media (max-width: 768px) {
      top: 58px;
    }
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 20px;
    font-weight: bold;
  }

  .swiper-pagination-bullet {
    background-color: #fff0;
    border: 2px solid #fff;
    padding: 5px;

    //Mobile
    @media (max-width: 768px) {
      padding: 3px;
    }
  }

  .swiper-pagination-bullet-active {
    background-color: #fff;
  }

  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 0;
  }

  img {
    height: 100%;
    width: 100%;
  }
`;
