import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../src/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#001931] text-white py-6 border-t border-[#0a3a5f]">
      <div className="container mx-auto px-5 lg:px-20">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 border-b border-[#0a3a5f] pb-4">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-8" />
            <h2 className="text-lg font-semibold">HERO.IO</h2>
          </div>

          {/* Social Icons */}
          <div className="text-center md:text-right">
            <h3 className="text-sm mb-1">Social Links</h3>
            <div className="flex justify-center md:justify-end gap-4 text-xl">
              <FaXTwitter className="hover:text-primary cursor-pointer" />
              <FaLinkedin className="hover:text-primary cursor-pointer" />
              <FaFacebook className="hover:text-primary cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center text-xs pt-4">
          Copyright © 2025 - All right reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
