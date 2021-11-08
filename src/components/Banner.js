import React from "react";

const Banner = ({ name }) => {
  return (
    <>
      <div className="h-40 flex justify-center items-center bg-pink-50">
        <h1 className="text-5xl font-bold uppercase">{name}</h1>
      </div>
    </>
  );
};

export default Banner;
