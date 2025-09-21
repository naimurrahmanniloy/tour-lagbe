import React from "react";
import vdoBg from "../../assets/134998-760679973_small.mp4";

const Header = () => {
  return (
    <div className="video-content">
      <video src={vdoBg} autoPlay loop muted />
    </div>
  );
};

export default Header;
