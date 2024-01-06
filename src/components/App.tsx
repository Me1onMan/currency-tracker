import React from "react";

import Header from "./Header/index";
import HomeContent from "./HomeContent";
import Footer from "./Footer/index";
import Navbar from "./Navbar/index";

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <HomeContent />
      <Footer />
    </>
  );
}
