import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaArrowAltCircleRight, FaStar } from "react-icons/fa";

const SingleProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        const product = data.filter((p) => p.id == id);

        setProducts(product[0]);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
    window.scrollTo({top:0, behaviour: 'smooth'})
  }, [id]);

  const { title, category, price, image, status } = products;
  return (
    <div className=" mt-28 max-w-screen-2xl container mx-auto xl:px-4 ">
      <div className=" p-3 max-w-7xl m-auto">
        <div className="mt-5">
            <a href="/" className=" text-gray-500">Home </a>
            <a href="/shop" className="font-bold text-black">/ Shop</a>
        </div>
        <div className=" mt-2 sm:mt-10">
          <div className=" grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max">
            <div>
              <img src={image} alt="" />
            </div>
            {/* product details */}
            <div>
              <h1 className="title text-left"> {title}</h1>
              <p className="mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left sm:mt-mtop">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur quis amet ipsa autem culpa eligendi quibusdam aut,
                rerum sit quos perspiciatis beatae, debitis quae quidem eaque
                adipisci fugit quas sint? Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Sit eum dolorem nesciunt, optio
                dolor modi accusamus laborum ad similique tenetur necessitatibus
                harum praesentium quae distinctio, laboriosam corrupti ut
                architecto error!
              </p>

              <span className=" my-2 text-xl text-yellow-400 flex gap-1 sm:my-4 items-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <p className=" text-xl text-red-500 font-semibold sm:text-2xl">
                ${price}
              </p>
              <div className="mt-4">
                <div className=" text-left flex flex-col gap-2 w-full">
                  <label className=" font-semibold">Quantity</label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    defaultValue={1}
                    required
                    className=" border border-gray-300 text-sm font-semibold mb-1 max-w-full
                     w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 focus:border-red-500"
                  />
                </div>
                <div className="w-full text-left my-4">
                  <button
                    className=" flex justify-center items-center gap-2 py-3 px-4
                   w-full bg-red-500 text-white font-bold border border-red-500
                    rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6"
                  >
                    <span>Confirm Order</span>
                    <FaArrowAltCircleRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" text-balck/75 mt-12">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea sint
            eligendi voluptatibus obcaecati voluptate soluta modi laudantium
            ratione ipsum commodi, itaque laborum velit sapiente exercitationem
            blanditiis a! Officiis, maxime eius.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            dolorem animi culpa veniam porro, nisi illum et quaerat aut eos
            error voluptates accusantium hic id ullam suscipit at magnam
            aspernatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dicta
            rem possimus! Debitis molestias optio exercitationem eligendi
            consectetur iste ipsum corrupti vero voluptatibus voluptates
            reiciendis itaque porro, provident fugiat amet!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
            voluptas, aut laboriosam, excepturi pariatur qui consequuntur,
            provident neque similique vel soluta autem nisi corrupti voluptatem
            cumque animi rem aliquid non.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
