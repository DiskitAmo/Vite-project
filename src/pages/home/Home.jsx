import React from "react";
import Featured from "../../../components/featured/featured";
import Slide from "../../../components/Slide/Slide";
import TrustedBy from "../../../components/trustedBy/TrustedBy";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide />
    </div>
  );
};

export default Home;
