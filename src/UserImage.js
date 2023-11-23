import React from "react";
import red2Image from "./Image/red2.png";

const UserImage = ({ image }) => {
  return <img src={image} alt="User" className="user-image" />;
};

export default UserImage;