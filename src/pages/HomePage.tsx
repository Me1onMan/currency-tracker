import React from "react";

import Footer from "../components/Footer/index";
import Header from "../components/Header/index";
import HomeContent from "../components/HomeContent/index";
import Navbar from "../components/Navbar/index";

function HomePage(): JSX.Element {
  return (
    <>
      <Navbar />
      <Header />
      <HomeContent />
      <Footer />
    </>
  );
}

export default HomePage;
