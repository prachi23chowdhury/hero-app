import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../../src/assets/logo.png";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#001931] text-white py-6 border-t border-[#0a3a5f]">
      <div className="container mx-auto px-5 lg:px-20">

       
        <div className="flex items-center justify-between border-b border-[#0a3a5f]">
      
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-8" />
            <h2 className="text-lg font-semibold">HERO.IO</h2>
          </div>

     
          <div>
            <h3 className="text-sm mb-1 text-right">Social Links</h3>
            <div className="flex gap-3 text-xl">
              <FaXTwitter className="hover:text-primary cursor-pointer " />
              <FaLinkedin className="hover:text-primary cursor-pointer rounded-2xl " />
              <FaFacebook className="hover:text-primary cursor-pointer " />
            </div>
          </div>
        </div>

       
        <div className="text-center text-xs pt-4">
          Copyright © 2025 - All right reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
