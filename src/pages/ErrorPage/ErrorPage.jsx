import React from "react";
import { useNavigate } from "react-router";
import errorImage from "../../assets/error-404.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Title from "../../components/Title";

const ErrorPage = () => {
  Title('ErrorPage | HeroApp');
  const navigate = useNavigate();

  return (
    <div>
        <Navbar></Navbar>
       <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 px-5 pt-5 text-center">
  <img src={errorImage} alt="404 Error" className="w-80 md:w-96 mb-4" />
  <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Oops, page not found!</h1>
  <p className="text-gray-600 mb-4">The page you are looking for is not available.</p>
  <button
    onClick={() => navigate(-1)}
    className="bg-primary text-white font-semibold px-6 py-2 rounded
               shadow-md hover:bg-purple-700 hover:shadow-lg transition-all duration-300"
  >
    Go Back!
  </button>
</div>

    <Footer></Footer>
    </div>
    
  );
};

export default ErrorPage;
