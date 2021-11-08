import React from "react";
import banner from "../images/banner.svg";

const Hero = () => {
  return (
    <>
      <div className="bg-pink-50 pt-14 lg:py-14 ">
        <div className="container md:flex lg:flex items-center">
          <div className="lg:w-2/5 w-full">
            <h6 className="text-md lg:text-xl font-semibold mb-2">
              New Trendy, Top Brands, lowest Prices
            </h6>
            <h1 className="text-3xl lg:text-5xl font-bold mt-1 mb-5 uppercase">
              Exciting Deals on New Arrivals
            </h1>
            <p className="text-base lg:text-lg mb-2">
              Sale up to 25% off all in store
            </p>
            <button className="bg-yellow-600 border border-yellow-500 hover:bg-transparent hover:text-yellow-600 uppercase mt-4 px-3 lg:px-6 py-2 lg:py-3 transition text-white text-base lg:text-md rounded-lg">
              Shop Now
            </button>
          </div>
          <div className="lg:w-3/5 w-full">
            <img src={banner} alt="img" className="h-96 lg:w-9/12 lg:pl-5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
