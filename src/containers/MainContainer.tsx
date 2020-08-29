import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import information from "../data/information";

const MainContainer = () => {
  return (
    <>
      <Header title={information.title} />
      <Nav />
    </>
  );
};

export default MainContainer;
