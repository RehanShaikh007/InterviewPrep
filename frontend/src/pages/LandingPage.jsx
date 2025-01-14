import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const LandingPage = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-pink-200">
      <Navbar />
      <div className="flex flex-wrap pb-10 pt-5">
        <section className="p-6 w-full lg:w-1/2">
          <h1 className="text-3xl font-bold">
            Elevate Your{" "}
            <span className="uppercase text-pink-800">Interview Game</span>
          </h1>
          <h2 className="text-xl mt-4">
            with Our Free Real-Time Questions Repo Today!
          </h2>
          <p className="mt-2 w-full lg:w-[80%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat non
            et minus officia numquam expedita laudantium inventore autem placeat
            necessitatibus iusto, amet, earum dolorem quaerat mollitia dolor
            ratione animi explicabo.
          </p>
          <h2 className="text-xl font-medium mt-6 text-cyan-700">
            REGISTER TODAY!
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum,
            officia?
          </p>
        </section>

        <section className="w-full lg:w-1/2 mt-10 px-6">
          <h2 className="font-medium mb-4">OUR SERVICES</h2>
          <Slider {...settings}>
            <img
              src="./pic1.png"
              alt=""
              className="rounded-lg h-[300px] w-full object-cover cursor-pointer"
            />
            <img
              src="./pic2.png"
              alt=""
              className="rounded-lg h-[300px] w-full object-cover cursor-pointer"
            />
            <img
              src="./pic3.png"
              alt=""
              className="rounded-lg h-[300px] w-full object-cover cursor-pointer"
            />
            <img
              src="./pic4.png"
              alt=""
              className="rounded-lg h-[300px] w-full object-cover cursor-pointer"
            />
            <img
              src="./pic5.png"
              alt=""
              className="rounded-lg h-[300px] w-full object-cover cursor-pointer"
            />
          </Slider>
        </section>
      </div>

      <section className="text-white flex flex-wrap justify-between items-center w-full p-4 px-10 mt-4 font-medium mb-20 gap-4">
        <button className="bg-gradient-to-r from-cyan-800 to-pink-700 p-4 rounded-lg hover:scale-110 transition-transform">
          100% ASSISTANCE
        </button>
        <button className="bg-gradient-to-r from-cyan-800 to-pink-700 p-4 rounded-lg hover:scale-110 transition-transform">
          GUARANTEED RESULT
        </button>
        <button className="bg-gradient-to-r from-cyan-800 to-pink-700 p-4 rounded-lg hover:scale-110 transition-transform">
          4 STAR RATING
        </button>
        <button className="bg-gradient-to-r from-cyan-800 to-pink-700 p-4 rounded-lg hover:scale-110 transition-transform">
          50+ SATISFIED CLIENTS
        </button>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
