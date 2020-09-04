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
  return (
    <div className="home">
      <div className="home-position">{data.position}</div>
      <div className="home-title">
        <h1 className="home-title-name">
          {data.name.split(" ").map((value: string, index: number) => {
            console.log(value);
          })}
        </h1>
      </div>
    </div>
  );
};

export default Home;
