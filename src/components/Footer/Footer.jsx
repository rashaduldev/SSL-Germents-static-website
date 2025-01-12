import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faEnvelope,
  faPhone,
  faGlobe,
  faAnglesUp,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { FaDribbbleSquare, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLastFmCircular } from "react-icons/ti";
import logo from '../../assets/image/fontImage/headerImage.JPG';
import semo from '../../assets/image/semo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-white relative mt-10">
      <button className="w-16 h-16 bg-white text-[#1F2937] rounded-full border-2 border-black absolute left-[45%] bottom-[97%] md:left-[50%] md:bottom-[92%]"
       onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <FontAwesomeIcon icon={faAnglesUp} size="2xl" />
      </button>
      <div className="container mx-auto footer p-10">
        <nav className="">
        <div className="text-lg mb-5">
          <img className="w-16 h-14 text-center mx-auto"   src={logo} alt="" />
        <p className='italic pt-1 font-bold text-lg'>100% Export Oriented Company</p>
        </div>
          <h6 className="font-bold text-white text-2xl">Stylorium Sourcing Ltd.</h6>
          <a className="link link-hover text-lg">Corporate Headquarters</a>
          <div className="w-4/6 text-lg mt-3 flex items-start">
            <FontAwesomeIcon icon={faHouseChimney} />
            <span className="ml-2 -mt-2">
            House: 43 (Level-5), Road: 17, Uttara, Dhaka-1230, Bangladesh
            </span>
          </div>
          <div className="flex gap-2 text-lg items-center">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>
              Email:<a className="link link-hover"> info@stylorium.net</a>{" "}
            </p>
          </div>
          <div className="flex gap-2 w-4/6 text-lg items-center">
            <FontAwesomeIcon icon={faPhone} />
            <span className="">Phone: +880 1730595698</span>
          </div>
          <div className="flex gap-2 text-lg items-center">
            <FontAwesomeIcon icon={faGlobe} />
            <p>
              Website:<a className="link link-hover"> www.stylorium.net</a>{" "}
            </p>
          </div>
        </nav>
        {/* mIddle */}
        <nav className="text-lg">
          {/* <h6 className="footer-title"></h6> */}
          <a className="link link-hover ml-2 text-lg font-bold md:mt-16">India Office</a>
          <div className="flex gap-2 mt-3 w-4/6">
            <FontAwesomeIcon icon={faHouseChimney} />
            <span className="-mt-2">
            Flat: N5 Crest View
Jewel Richmond, Rajagiri Valley
       Kakkanad, Kochi, Kerala
                      India
            </span>
          </div>
          <a className="link link-hover text-lg font-bold">Pakistan Office</a>
          <div className="flex gap-2 mt-3 w-4/6">
            <FontAwesomeIcon icon={faHouseChimney} />
            <span className="-mt-2">
            Dynasty Tower
    Adjacent Ocean Mall,
         14th Floor, 1401
   Clifton block 9. Karachi
                Pakistan
            </span>
          </div>
          <a className="link link-hover text-lg font-bold mt-5">Sisters concern</a>
          <div className="flex gap-2 w-4/6">
            <img className="h-8 w-8 rounded" src={semo} alt="" />
            <span className="">
            SIMO TEX
            </span>
          </div>
        </nav>
        <nav className="text-lg">
          <h6 className="font-bold md:mt-16">Quick View</h6>

          <div className="flex gap-2 ">
            <FontAwesomeIcon icon={faCircleCheck} />
            <NavLink to={'/gallery'}>
            <a className="link link-hover">Product Gallery</a>
            </NavLink>
          </div>
          <div className="flex gap-2 ">
            <FontAwesomeIcon icon={faCircleCheck} />
            <NavLink to={'/faq'}>
            <a className="link link-hover">FAQ</a>
            </NavLink>
          </div>
          <div className="flex gap-2 ">
            <FontAwesomeIcon icon={faCircleCheck} />
            <a className="link link-hover">R&D</a>
          </div>
        </nav>
      </div>
      <div className="flex justify-center gap-5 border-base-300 px-10 py-4 text-3xl">
      <FaFacebook />
      <AiFillTwitterCircle />
      <FaLinkedin />
      <FaDribbbleSquare />
      <TiSocialLastFmCircular />
      <FaYoutube />
      </div>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p className="text-lg">
            Copyright © {new Date().getFullYear()} - Stylorium Sourcing Ltd.
          </p>
        </aside>
      </footer>
    </footer>
  );
};

export default Footer;
