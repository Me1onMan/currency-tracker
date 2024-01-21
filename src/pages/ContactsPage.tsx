import React from "react";

// @ts-expect-error @ as src
import Contacts from "@components/Contacts";
// @ts-expect-error @ as src
import ErrorBoundary from "@components/ErrorBoundary";
// @ts-expect-error @ as src
import Footer from "@components/Footer";
// @ts-expect-error @ as src
import Header from "@components/Header";
// @ts-expect-error @ as src
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
