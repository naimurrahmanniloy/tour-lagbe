import React from "react";
import vdoBg from "../../assets/134998-760679973_small.mp4";

const Header = () => {
  return (
    <div className="video-content">
      <div className="overlay"></div>
      <video src={vdoBg} autoPlay loop muted />
      <div className="video-text">
        <h1 className="text-6xl font-bold text-white text-center">
          Tour লাগবে?
        </h1>
        <p className="text-2xl text-white text-center mt-4">
          We provide the best services for you.
        </p>
      </div>
    </div>
  );
};

export default Header;
