import React from "react";
import { FooterSocial } from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <FooterSocial />
    </>
  );
};

export default Layout;
