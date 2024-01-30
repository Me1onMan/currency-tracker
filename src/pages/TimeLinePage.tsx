import React from "react";
import ErrorBoundary from "@components/ErrorBoundary";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Navbar from "@components/Navbar";
import TimeLineContent from "@components/TimeLineContent";
import { ChartDataProvider } from "@contexts/ChartDataProvider";

function TimeLinePage(): JSX.Element {
  return (
    <ErrorBoundary>
      <ChartDataProvider>
        <Navbar />
        <Header />
        <TimeLineContent />
        <Footer />
      </ChartDataProvider>
    </ErrorBoundary>
  );
}

export default TimeLinePage;
