import React from "react";
import Head from "next/head";

import Header from "../src/containers/header";
import Caroussel from "../src/components/caroussel";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Ewg" />
        <title>EWG</title>
      </Head>

      <Header />
      <Caroussel />
    </>
  );
};

export default Home;
