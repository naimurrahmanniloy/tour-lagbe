import React from "react";
import Header from "../../Shared/Header/Header";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <div className="px-10">
        <Navbar></Navbar>
      </div>
      <Header></Header>
    </div>
  );
};

export default Home;
