import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React from "react";

type LayoutProps = {
  h1: string;
  children: React.ReactNode;
};

export default function Layout({ h1, children }: LayoutProps) {
  return (
    <>
      <Header h1={h1} />
      {children}
      <Footer />
    </>
  );
}
