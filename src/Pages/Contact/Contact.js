import React from "react";
import phone from "../../assetes/call.png";
import Iframe from "react-iframe";
import { useSelector } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { siteName } from "../../App";

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

const Contact = () => {
  const { mode } = useSelector((state) => state.darkMode);
  return (
    <HelmetProvider>
        <Helmet>
            <title>Contact - {siteName}</title>
        </Helmet>
    <div
      className="min-h-screen bg-base-100"
      style={{
        background: mode ? "#18191A" : "white",
        color: mode ? "white" : "black",
      }}
    >
      {/* Contact Upper part */}
      <section
        className="relative h-[400px] bg-cover w-auto bg-no-repeat bg-center bg-fixed"
        style={{
          background: `linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 0%), url('https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80')`,
        }}
      >
        <div className="relative grid lg:grid-cols-2 sm:grid-cols-1 gap-4 items-center w-full h-full justify-center md:p-8 p-0">
          <div className="text-white lg:ml-10 p-5">
            <span className="font-bold text-4xl">
              <span className="text-lime">Looking</span> For More?
            </span>
            <br />
            <span className="font-semibold text-2xl">
              Book <span className="text-lime font-normal">an Appointemt</span>
            </span>
          </div>
          <div className="lg:max-w-sm w-auto p-8 flex flex-row items-center justify-center gap-4 animate-pulse">
            <img className="md:w-28 w-20" src={phone} alt="" />
            <div className="">
              <p className="text-white text-xl font-medium whitespace-nowrap">
                Need assistance? call us 24/7
              </p>
              <p className="text-white text-lg font-medium whitespace-nowrap mt-2">
                +880 800 555 123
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Upper part end */}
      <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 justify-center items-center text-black">
        <div className="relative">
          <img
            className=" h-[600px] lg:w-5/6 md:w-full md:px-5 px-5 w-auto inline-block lg:-mt-20 mt-5"
            src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        </div>
        {/* From start */}
        <div className="rounded-lg justify-self-center">
          <h2 className="text-xl text-center font-bold text-primary my-5">
            Feel free to Contact Us
          </h2>
          <form
            className=""
            action="https://formspree.io/f/xwkjpooa"
            method="POST"
          >
            {/* name field  */}
            <div className="flex lg:flex-row flex-col gap-3">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered lg:w-full md:w-96 mt-5 "
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Phone"
                  className="input input-bordered mt-5 md:w-96 lg:w-full"
                  name="phone"
                  required
                />
              </div>
            </div>
            {/* email field  */}
            <div className="form-control ">
              <input
                type="email"
                placeholder="Email"
                className="mt-5 input input-bordered "
                name="email"
                required
              />
            </div>

            {/* message field  */}
            <div className="form-control ">
              <textarea
                className="my-5 border border-solid p-5 border-gray-300 rounded-lg  focus:bg-white  focus:outline-gray-300"
                name="message"
                id=""
                cols="20"
                rows="5"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <input
              className="btn btn-primary bg-gradient-to-r from-lime to-black text-white w-full mt-4"
              value="Send"
              type="submit"
            />
          </form>
        </div>
        {/* From end */}
      </section>
      {/* map section */}
      <section className="container mx-auto flex flex-row justify-center items-center lg:my-5 sm:my-2 p-5">
        <Iframe
          className="lg:h-[600px] sm:h-48"
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.702714087243!2d-118.24379858493394!3d34.05149622521712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c648957fbb05%3A0x8c6c875a0069f4c9!2s26%20N%20Los%20Angeles%20St%2C%20Los%20Angeles%2C%20CA%2090012%2C%20USA!5e0!3m2!1sen!2sbd!4v1674159891667!5m2!1sen!2sbd"
          width="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          position="relative"
        ></Iframe>
      </section>
    </div>
    </HelmetProvider>
  );
};

export default Contact;
