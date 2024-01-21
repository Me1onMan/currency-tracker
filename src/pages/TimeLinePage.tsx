import React from "react";

// @ts-expect-error @ as src
import Footer from "@components/Footer";
// @ts-expect-error @ as src
import Header from "@components/Header";
// @ts-expect-error @ as src
import Navbar from "@components/Navbar";
// @ts-expect-error @ as src
import TimeLineContent from "@components/TimeLineContent";
// @ts-expect-error @ as src
import ChartDataProvider from "@contexts/ChartObserver";
// @ts-expect-error @ as src
import ErrorBoundary from "@components/ErrorBoundary";

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
