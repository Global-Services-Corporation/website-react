import React from "react";
import { Header } from "../components/header";

const LandingLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default LandingLayout;
