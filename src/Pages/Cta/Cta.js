import React from "react";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <div>
      <div className="2xl:mx-auto dark:bg-gray-900 2xl:container md:py-12 py-9">
        <div className="relative">
          <img
            src="https://i.ibb.co/SBpL1cK/pexels-aleksandar-pasaric-325185-1.png"
            alt="city view"
            className="w-full h-full   object-center object-fill absolute sm:block hidden"
          />
          <img
            src="https://i.ibb.co/LQpxBsc/mobile.png"
            alt="city view"
            className="w-full h-full  absolute object-center object-fill sm:hidden"
          />
          <div className="text-xl relative z-20 bg-gradient-to-r from-primary to-transparent w-full h-full top-0 md:p-16 p-6 flex flex-col justify-between ">
            <div>
              <h1 className="md:text-5xl text-3xl font-bold md:leading-10 leading-9 text-white sm:w-auto w-64">
                Act Before It’s Too Late!
              </h1>
              <p className="text-lg leading-6 text-white xl:w-5/12 lg:w-8/12 md:w-10/12  2xl:pr-12 mt-4">
                A good idiom for kids is "It's raining cats and dogs." Kids know
                what both cats and dogs are from an early age.
              </p>
            </div>
            <div className="md:mt-12 mt-20">
              <Link
                to="/contactus"
                className="text-base font-bold leading-4 text-primary bg-secondary sm:w-auto w-full rounded p-4 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
