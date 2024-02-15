import React from "react";

const Collections = () => {
  return (
    <div className='bg-[url("/public/collection-bg.png")] bg-cover bg-center bg-no-repeat lg:px-28 my-20'>
      <div className="h-[568px] flex justify-between md:flex-row items-center">
        <div className="md: w-1/2"></div>
        <div className="md: w-1/2">
          <img src="/public/Zara-logo.png" alt="" />
          <p className="text-lg text-white capitalize my-8 md:w-2/3 leading-[32px]">
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
          </p>
          <button className=" px-6 py-2 bg-white rounded-sm text-black font-semibold">See Collection</button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
