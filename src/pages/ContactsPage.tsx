import React from "react";
import Contacts from "@components/Contacts";
import ErrorBoundary from "@components/ErrorBoundary";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Navbar from "@components/Navbar";

function ContactsPage(): JSX.Element {
  return (
    <ErrorBoundary>
      <Navbar />
      <Header />
      <Contacts />
      <Footer />
    </ErrorBoundary>
  );
}

export default ContactsPage;
