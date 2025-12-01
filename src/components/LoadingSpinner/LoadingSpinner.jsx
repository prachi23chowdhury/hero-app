import React from "react";
import logo from "../../assets/logo.png"

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center py-10">
      <p className="text-4xl text-shadow-blue-900 font-bold gap-2" >L</p>
      <img  src={logo} className=" w-10 h-10 animate-spin"/>
       <p className="text-4xl text-shadow-blue-900 font-bold gap-2" >ADING</p>
        
      
    </div>
  );
};

export default LoadingSpinner;



