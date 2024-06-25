import React from "react";
import { Header } from "../components/header";
import Footer from "../components/footer";

const LandingLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default LandingLayout;
