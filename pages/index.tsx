import React from "react";
import Head from "next/head";

import Header from "../src/containers/header";
import CarousselHeader from "../src/components/CarousselHeader";
import ShowCase from "../src/containers/showCase";
import Footer from "../src/containers/footer";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Ewg" />
        <title> EWG Comércio de Materiais Elétricos e Hidráulicos </title>
      </Head>

      <Header />
      <CarousselHeader />
      <ShowCase />
      <Footer />
    </>
  );
};

export default Home;
