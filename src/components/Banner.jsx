import React from "react";
import Googleplay from "../assets/Google.png";
import Appstore from "../assets/App store.png";
import hero from "../assets/hero.png";

const Banner = () => {
  return (
    <div className="w-full px-5 lg:px-20 py-20 text-center bg-base-100 pt-10">

      <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
        We Build <br />
        <span className="bg-primary-text">Productive</span> Apps
      </h1>

      <p className="mt-6 text-sm text-[#627382] max-w-2xl mx-auto">
        At HERO.IO, we craft innovative apps designed to make everyday life 
        simpler, smarter, and more exciting.
      </p>

      <p className="text-sm text-[#627382] max-w-2xl mx-auto mt-2">
        Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <button className="btn gap-2 px-6 py-3 rounded-lg border-2">
          <img className="w-[20px] h-[20px]" src={Googleplay} alt="" />
          Google Play
        </button>

        <button className="btn gap-2 px-6 py-3 rounded-lg border-2">
          <img className="w-[20px] h-[20px]" src={Appstore} alt="" />
          App Store
        </button>
      </div>

     
      <div className="mt-8 flex justify-center">
        <img 
          src={hero} alt="" 
          className="w-[250px] sm:w-[300px] lg:w-[600px] mx-auto" 
        />
      </div>

    </div>
  );
};

export default Banner;
