import React from "react";
import { useSelector } from "react-redux";
import about from "../../../src/assetes/about.png";
import home from "../../../src/assetes/home.png";
import loc2 from "../../../src/assetes/reduction.png";
import men from "../../../src/assetes/support.png";

const About = () => {
  const { mode } = useSelector((state) => state.darkMode);
  return (
    
    <div className="max-w-[1240px] mx-auto my-10  lg:mt-24">
      <h3 className="text-center text-2xl font-semibold mb-8"style={{
      color: mode ? "#808183" : "#161C2D",
    }}>
        About Us
      </h3>
      <div className="grid gap-10 grid-cols-1 lg:grid-cols-2 px-10 lg:px-0">
        <img src={about} alt="about" className="" />

        {/* about right side*/}
        <div>
          <div>
            <div className="">
              <h2 className="text-left text-5xl font-bold mb-8 leading-[60px]">
                Dream Living Spaces
                <br /> Setting New Build
              </h2>
              <p className="mb-8 leading-[30px]">
                Over 39,000 people work for us in more than 70 countries all
                over the This breadth of global coverage, combined with
                specialist services
              </p>
            </div>

            <div className="flex felx-row border-4 p-4 mb-8 hover:shadow-2xl transition duration-300 hover:border-primary ">
              <img src={home} alt="" className="w-[70px] h-[70px] mr-4" />
              <div>
                <h2 className="text-left text-2xl font-bold mb-2">
                  The Perfect Residency
                </h2>
                <p>Search thousand of apartments from our site</p>
              </div>
            </div>
            <div className="flex felx-row border-4 p-4 mb-8 hover:shadow-2xl transition duration-300  hover:border-primary ">
              <img src={men} alt="" className="w-[70px] h-[70px] mr-4" />
              <div>
                <h2 className="text-left text-2xl font-bold mb-2">
                  24/7 support
                </h2>
                <p>we are open 24/7 for listening from your end</p>
              </div>
            </div>
            <div className="flex felx-row border-4 p-4 mb-8 hover:shadow-2xl transition duration-300  hover:border-primary">
              <img src={loc2} alt="" className="w-[70px] h-[70px] mr-4" />
              <div>
                <h2 className="text-left text-2xl font-bold mb-2">
                  Low service charge
                </h2>
                <p>Lowest charges in town & atterctive offers</p>
              </div>
            </div>
          </div>
        </div>
        {/* about right side end here */}
      </div>
    </div>
  );
};

export default About;
