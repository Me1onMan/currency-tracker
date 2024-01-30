import React from "react";
import { Link } from "react-router-dom";
import { CONTACTS_ROUTE } from "@constants/routes";

import { LinksContainer } from "./styled";

const links = [
  {
    title: "General",
    link1: {
      text: "Market",
    },
    link2: {
      text: "Service",
    },
  },
  {
    title: "Product",
    link1: {
      text: "Sparks",
    },
    link2: {
      text: "Snaps",
    },
  },
  {
    title: "Community",
    link1: {
      text: "Ideas",
    },
    link2: {
      text: "Streams",
    },
  },
];

function FooterLinks() {
  return (
    <LinksContainer>
      {links.map((link) => (
        <div key={link.title}>
          <p>{link.title}</p>
          <Link to={CONTACTS_ROUTE}>{link.link1.text}</Link>
          <Link to={CONTACTS_ROUTE}>{link.link2.text}</Link>
        </div>
      ))}
    </LinksContainer>
  );
}

export default FooterLinks;
