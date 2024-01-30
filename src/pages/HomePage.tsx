import React from "react";
import ErrorBoundary from "@components/ErrorBoundary";
import Footer from "@components/Footer/index";
import Header from "@components/Header/index";
import HomeContent from "@components/HomeContent/index";
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
