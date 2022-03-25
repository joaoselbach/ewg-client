import React from "react";
import { AppProps } from "next/app";

import GlobalStyle from "../styles/global";

import "antd/dist/antd.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};

export default MyApp;
