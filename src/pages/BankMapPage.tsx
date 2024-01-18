import React from "react";

import BankMapContent from "../components/BankMapContent/index";
import Footer from "../components/Footer/index";
import Header from "../components/Header/index";
import Navbar from "../components/Navbar/index";

function BankMapPage(): JSX.Element {
  return (
    <>
      <Navbar />
      <Header />
      <BankMapContent />
      <Footer />
    </>
  );
}

export default BankMapPage;
