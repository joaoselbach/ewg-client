import React from "react";
import Head from "next/head";

import Header from "../src/containers/header";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Ewg" />
        <title>EWG</title>
      </Head>

      <Header />
    </>
  );
};

export default Home;
