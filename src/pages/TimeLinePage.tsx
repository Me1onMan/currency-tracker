import React from "react";

import ChartDataProvider from "../contexts/ChartObserver";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import TimeLineContent from "../components/TimeLineContent";

function TimeLinePage(): JSX.Element {
  return (
    <ChartDataProvider>
      <Navbar />
      <Header />
      <TimeLineContent />
      <Footer />
    </ChartDataProvider>
  );
}

export default TimeLinePage;
