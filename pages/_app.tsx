import React from "react";
import { AppProps } from "next/app";

import GlobalStyle from "../styles/global";

import "../node_modules/swiper/swiper-bundle.min.css";
import "../node_modules/swiper/swiper.min.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};

export default MyApp;
