import React from "react";
import vdoBg from "../../assets/134998-760679973_small.mp4";
import Navbar from "../../components/Navbar/Navbar";

const Header = () => {
  return (
    <div>
      <div className="video-content">
        <div className="overlay"></div>
        <video src={vdoBg} autoPlay loop muted />
        <div className="video-text">
          <h1 className="text-6xl font-bold italic text-white text-center">
            <span className="text-red-600">Tour</span>
            <span className="text-teal-600">লাগবে.</span>
          </h1>
          <p className="text-2xl text-white text-center mt-8">
            Our ultimate travel partner for exploring the breathtaking beauty of
            Bangladesh!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
