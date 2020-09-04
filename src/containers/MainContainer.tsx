import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import headerData from "../data/header";
import homeData from "../data/home";
import ReactFullpage from "@fullpage/react-fullpage";
import Section from "../components/common/Section";
import Home from "../components/Home";

const MainContainer = () => {
  return (
    <>
      <ReactFullpage
        //fullpage options
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000} /* Options here */
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <Section>
                <Header nav={headerData} />
                <Home data={homeData} />
              </Section>
              <div className="section">
                <p>Section 2</p>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      <Nav />
    </>
  );
};

export default MainContainer;
