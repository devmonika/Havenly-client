import React from "react";
import { FaFacebook, FaLinkedin, FaEnvelopeOpenText } from "react-icons/fa";
import { Link } from "react-router-dom";
// import image from '../images/footer.jpg'
import image from "../../../assetes/contact_hero.jpg";

const Footer = () => {
  return (
    <footer
      className="text-white"
      style={{ background: `url(${image})`, backgroundSize: "cover" }}
    >
      <div className="sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-24  justify-evenly   gap-8 ">
        <div className="">
          <h2 className="text-2xl">About Us</h2>
          <p className="text-start mt-3 leading-loose">
            House rendering is the process of applying a coating such as cement
            or lime to a façade exterior brickwork, blueboard, etc. with the aim
            of creating a smooth or sometimes textured surface.
          </p>
        </div>
        <div className="lg:mx-16 ">
          <h2 className="text-2xl text-start">Useful Links</h2>
          <ul className="mt-3">
            <li className="text-start ">
              <Link>Blog</Link>
            </li>
            <br />
            <li className="text-start ">
              <Link>Success</Link>
            </li>
            <br />
            <li className="text-start">
              <Link>Terms and Conditions</Link>
            </li>
            <br />
            <li className="text-start">
              <Link>Privacy & App Privacy Policy</Link>
            </li>
            <br />
            <li className="text-start">
              <Link to="/contactus">Contact us</Link>
            </li>
            <br />
          </ul>
        </div>
        <div className="">
          <div className="">
            <h2 className="text-2xl text-start">Follow Us</h2>
            <ul className="flex mt-8 text-start">
              <li>
                {" "}
                <FaFacebook className=" mr-4  text-3xl" />
              </li>
              <li>
                {" "}
                <FaLinkedin className=" mr-4  text-3xl" />
              </li>
              <li>
                {" "}
                <FaEnvelopeOpenText className="mr-4  text-2xl" />
              </li>
            </ul>

            {/* <FaFacebook className='text-start mr-4  text-3xl' />
                        <FaLinkedin className=' mr-4  text-3xl' />
                        < FaEnvelopeOpenText className='mr-4  text-2xl' /> */}
          </div>
        </div>
      </div>
      <div className="text-center ">
        <p className="pb-12">
          Copyright © 2023 - All right reserved by Web Titan's
        </p>
      </div>
    </footer>
  );
};

export default Footer;
