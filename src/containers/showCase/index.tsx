import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import Product from "../../components/ProductCard";
import { purifiers, fans, faucets } from "./data";

import InfoImg from "../../assets/img/info.png";

import {
  CarousselContainer,
  Container,
  Delivery,
  SectionTitle,
} from "./styles";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const ShowCase = () => {
  const [windowSize, setWindowSize] = useState(1920);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });

    console.log(windowSize);
  }, [windowSize]);

  return (
    <Container>
      <Delivery src={InfoImg} />
      <SectionTitle>Purificadores</SectionTitle>
      <CarousselContainer>
        <Swiper
          className="mySwiper"
          pagination={true}
          spaceBetween={100}
          navigation
          slidesPerView={windowSize < 768 ? 1 : 4}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
        >
          {purifiers.map((purifier, index) => (
            <SwiperSlide key={purifier.id} className="swiper-slide">
              <Product
                title={purifier.title}
                price={purifier.price}
                installments={purifier.installments}
                imageUrl={purifier.imageUrl}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </CarousselContainer>
      <SectionTitle>Purificadores</SectionTitle>
      <CarousselContainer>
        <Swiper
          className="mySwiper"
          pagination={true}
          spaceBetween={100}
          navigation
          slidesPerView={windowSize < 768 ? 1 : 4}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
        >
          {fans.map((purifier, index) => (
            <SwiperSlide key={purifier.id} className="swiper-slide">
              <Product
                title={purifier.title}
                price={purifier.price}
                installments={purifier.installments}
                imageUrl={purifier.imageUrl}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </CarousselContainer>
      <SectionTitle>Purificadores</SectionTitle>
      <CarousselContainer>
        <Swiper
          className="mySwiper"
          pagination={true}
          spaceBetween={100}
          navigation
          slidesPerView={windowSize < 768 ? 1 : 4}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
        >
          {faucets.map((purifier, index) => (
            <SwiperSlide key={purifier.id} className="swiper-slide">
              <Product
                title={purifier.title}
                price={purifier.price}
                installments={purifier.installments}
                imageUrl={purifier.imageUrl}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </CarousselContainer>
    </Container>
  );
};

export default ShowCase;
