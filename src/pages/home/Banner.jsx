import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import banner from "/Images/banner.jpg";
const Banner = () => {
  return (
    <div className="bg-primaryBG py-12 xl:px28 px-4">
      <div className="py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14">
        <div className="md:w-1/2">
          <img src={banner} alt="" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-5xl font-light mb-5">Collections</h1>
          <p className="text-xl mb-7">
            you can explore and shop many differnt collection from various
            barands here.
          </p>
          <button className="bg-black hover:bg-orange-500 px-6 py-2 font-semibold text-white rounded-sm gap-2 text-center">
            <FaShoppingBag className="inline-flex" />
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
