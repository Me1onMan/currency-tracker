import React from "react";

// @ts-expect-error @ as src
import BankMapContent from "@components/BankMapContent/index";
// @ts-expect-error @ as src
import ErrorBoundary from "@components/ErrorBoundary";
// @ts-expect-error @ as src
import Footer from "@components/Footer/index";
// @ts-expect-error @ as src
import Header from "@components/Header/index";
// @ts-expect-error @ as src
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
