import "./Banner.css";
import '../Shared/Header/Header.css'
import slider from "../../images/01.jpg";
import slider2 from "../../images/02.jpeg";
import slider3 from "../../images/03.jpg";
import slider4 from "../../images/04.jpg";
import slider5 from "../../images/05.jpg";
import { Link } from "react-router-dom";

const Banner = () => {

  return (
    <div className='banner'>
          <img src="https://i.postimg.cc/T357SFc5/01.jpg" alt="slider" />
          <img src="https://i.postimg.cc/T357SFc5/01.jpg" alt="slider" />
          <img src="https://i.postimg.cc/T357SFc5/01.jpg" alt="slider" />
          <img src="https://i.postimg.cc/T357SFc5/01.jpg" alt="slider" />
          <img src="https://i.postimg.cc/T357SFc5/01.jpg" alt="slider" />
          <div className="bannerContent text-white center ">
            <h2 className='text-white font-bold text-3xl mb-3 uppercase text-center '>Welcome to havenly !</h2>
            <p className='text-xl text-center leading-8 w-full '>Where You can rent your prefer houses at budget friendly rate. Find Your Dream Home Today ! <br className='break' />
              Discover a Wide Range of Rentals to Suit Your Needs
            </p>
            <Link to="/apartments"><button className="hover:bg-primary ease-in-out bg-secondary text-center center px-8 font-bold text-xl py-3 mt-3 ">Apartments</button></Link>
          </div>
        </div>
  );
};

export default Banner;
