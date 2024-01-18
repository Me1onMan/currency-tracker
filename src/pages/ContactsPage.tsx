import React from "react";

import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

function ContactsPage(): JSX.Element {
  return (
    <>
      <Navbar />
      <Header />
      <Contacts />
      <Footer />
    </>
  );
}

export default ContactsPage;
