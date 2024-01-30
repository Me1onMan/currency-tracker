import React from "react";
import BankMapContent from "@components/BankMapContent/index";
import ErrorBoundary from "@components/ErrorBoundary";
import Footer from "@components/Footer/index";
import Header from "@components/Header/index";
import Navbar from "@components/Navbar/index";

function BankMapPage(): JSX.Element {
  return (
    <ErrorBoundary>
      <Navbar />
      <Header />
      <BankMapContent />
      <Footer />
    </ErrorBoundary>
  );
}

export default BankMapPage;
