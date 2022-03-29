import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Container } from "./styles";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Caroussel = () => {
  return (
    <Container>
      <Swiper
        pagination={true}
        navigation
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <img src="https://lojaewg.vteximg.com.br/arquivos/ids/159923/0930_banner_purificadores_v3.jpg?v=637687135171800000" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://lojaewg.vteximg.com.br/arquivos/ids/159695/0629_bannerservicos_final.jpg?v=637610893368800000" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://lojaewg.vteximg.com.br/arquivos/ids/161670/banner%20ewg.png?v=637811518721270000" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Caroussel;
