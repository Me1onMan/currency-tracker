import React from "react";

// @ts-expect-error @ as src
import ErrorBoundary from "@components/ErrorBoundary";
// @ts-expect-error @ as src
import Footer from "@components/Footer/index";
// @ts-expect-error @ as src
import Header from "@components/Header/index";
// @ts-expect-error @ as src
import HomeContent from "@components/HomeContent/index";
// @ts-expect-error @ as src
import Navbar from "@components/Navbar/index";

function HomePage(): JSX.Element {
  return (
    <ErrorBoundary>
      <Navbar />
      <Header />
      <HomeContent />
      <Footer />
    </ErrorBoundary>
  );
}

export default HomePage;
