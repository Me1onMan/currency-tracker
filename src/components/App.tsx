import React from "react";

import Footer from "./Footer/index";
import Header from "./Header/index";
import HomeContent from "./HomeContent";
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
