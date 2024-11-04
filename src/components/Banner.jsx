import React from "react";
import bannerImg from "../assets/banner.jpg";
import {Link} from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative">
      <div className="hero bg-purple-500 min-h-screen text-white rounded-xl p-20 border-2 ">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-center">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
          </h1>
          <p className="py-6 text-center">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
          <Link
            to="/dashboard"
            className="btn bg-white text-purple-500 font-bold rounded-3xl "
          >
            Shop Now
          </Link>
        </div>
      </div>
      <div className="relative bottom-32 lg:bottom-52 md:bottom-32 z-10">
        <div className=" w-[90%] sm:w-[70%] md:w-[50%] lg:w-[60%] h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[70vh] border-2 bg-transparent rounded-2xl mx-auto p-5">
          <img
            className=" w-full h-full object-cover rounded-2xl"
            src={bannerImg}
            alt=""
          />
        </div>
        <h1 className="text-center font-bold text-purple-800 text-3xl mt-24">
          Explore Cutting-Edge Gadgets
        </h1>
      </div>
    </div>
  );
};

export default Banner;
