import React from "react";
import "./Home.scss";

interface HomeProps {
  data: {
    position: string;
    name: string;
    description: string;
  };
}

const Home = ({ data }: HomeProps) => {
  return <div className="home">{data.position}</div>;
};

export default Home;
