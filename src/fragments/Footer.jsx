import React from "react";
import { NavLink } from "react-router-dom";
import { FaTwitter, FaFacebook } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center h-20 items-center gap-3  bg-white">
      <h2 className="font-bold">Bize Ulaşın</h2>
      <div className="w-full flex justify-center h-12  gap-5 bg-white">
        <NavLink>
          <FaTwitter className="text-blue-400 text-xl" />
        </NavLink>
        <NavLink>
          <FaFacebook className="text-blue-600 text-xl" />
        </NavLink>
        <NavLink>
          <AiFillMail className="text-red-600 text-xl" />
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
