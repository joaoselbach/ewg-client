import React from "react";
import Head from "next/head";

import Header from "../src/containers/header";
import CarousselHeader from "../src/components/CarousselHeader";
import ShowCase from "../src/containers/showCase";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Ewg" />
        <title>EWG</title>
      </Head>

      <Header />
      <CarousselHeader />
      <ShowCase />
    </>
  );
};

export default Home;
