import React from "react";
import { Link } from "react-router-dom";

const Newsletters = () => {
  return (
    <div className="bg-[#1E2832] bg-opacity-5 xl:px-28 px-4 py-16">
      <h2 className="title mb-8">Follow products and discounts on Instagram</h2>
      {/* Insta Grid */}
      <div className=" flex flex-wrap gap-4 items-center justify-center mb-20">
        <Link to="/">
          <img src="/Images/image-product-1.png" />
        </Link>
        <Link to="/">
          <img src="/Images/image-product-2.png" />
        </Link>
        <Link to="/">
          <img src="/Images/image-product-3.png" />
        </Link>
        <Link to="/">
          <img src="/Images/image-product-4.png" />
        </Link>
        <Link to="/">
          <img src="/Images/image-product-5.png" />
        </Link>
        <Link to="/">
          <img src="/Images/image-product-6.png" />
        </Link>
      </div>
      {/* news letters */}
      <div>
        <h2 className=" title mb-8">Or subscribe to the Newsletters</h2>
        <form className=" md:w-1/2 mx-auto text-center">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className=" h-8 bg-transparent outline-none border-b-2 pl-2 border-black
             md:w-2/3 w-full mb-5 placeholder:text-black/50 mr-4"
          />
          <input
            type="submit"
            value={"Submit"}
            className=" bg-black text-white px-6 py-1 rounded-sm"
          />
        </form>
      </div>
    </div>
  );
};

export default Newsletters;
