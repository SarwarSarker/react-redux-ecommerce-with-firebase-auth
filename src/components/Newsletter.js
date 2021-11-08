import React from "react";
import news from "../images/news.jpg";

const Newsletter = () => {
  return (
    <>
      <div className="container flex flex-row rounded-lg mb-16">
        <div className="lg:w-3/5 w-full lg:flex items-center bg-gradient-to-r from-purple-900 to-purple-900  lg:from-purple-900 lg:via-purple-700 lg:to-white rounded-lg px-5 py-5 text-gray-100">
          <div className="lg:w-8/12 w-full">
            <h4 className="text-3xl mb-3 font-bold">
              Subscribe to get our offers first
            </h4>
            <p className="mb-4 leading-relaxed text-sm font-semibold">
              Want to hear from us when we have new offers? Sign up for our new
              newsletter and we will email you every time.
            </p>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="text-gray-50 bg-gray-500 placeholder-gray-200 focus:outline-none font-semibold px-5 py-2 rounded-lg mb-3 w-full"
            />
            <button
              type="submit"
              className="bg-red-500 rounded-lg text-white px-5 py-2 w-full font-semibold"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="lg:w-2/5 lg:flex w-full hidden">
          <img src={news} alt="img" className="h-96" />
        </div>
      </div>
    </>
  );
};

export default Newsletter;
