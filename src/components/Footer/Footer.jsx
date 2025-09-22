/* eslint-disable react/prop-types */
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHouseChimney,
//   faEnvelope,
//   faPhone,
//   faGlobe,
//   faAnglesUp,
//   faCircleCheck,
// } from "@fortawesome/free-solid-svg-icons";
// import { NavLink } from "react-router-dom";
// import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
// import logo from "../../assets/image/fontImage/headerImage.JPG";
// import semo from "../../assets/image/semo.jpeg";

// const Footer = () => {
//   return (
//     <footer className="bg-[#1F2937] text-white relative mt-10">
//       <button
//         className="w-16 h-16 bg-white text-[#1F2937] rounded-full border-2 border-black absolute left-[45%] bottom-[97%] md:left-[50%] md:bottom-[92%]"
//         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//       >
//         <FontAwesomeIcon icon={faAnglesUp} size="2xl" />
//       </button>
//       <div className="container p-5 pt-10 mx-auto md:py-10 footer">
//         <nav className="">
//           <div className="m-5 text-lg md:mb-5 md:m-0">
//             <img className="w-16 mx-auto text-center h-14" src={logo} alt="" />
//             <p className="pt-1 text-lg italic font-bold">
//               100% Export Oriented Company
//             </p>
//           </div>
//           <h6 className="text-2xl font-bold text-white">
//             Stylorium Sourcing Ltd.
//           </h6>
//           <a className="text-lg link link-hover">Corporate Headquarters</a>
//           <div className="flex items-start w-4/6 mt-3 text-lg">
//             <FontAwesomeIcon icon={faHouseChimney} />
//             <span className="ml-2 -mt-2">
//               House: 43 (Level-5), Road: 17, Uttara, Dhaka-1230, Bangladesh
//             </span>
//           </div>
//          <div className="flex items-center gap-2 text-lg">
//           <FontAwesomeIcon icon={faEnvelope} />
//           <p>
//             Email:{" "}
//             <a
//               href="mailto:info@stylorium.net"
//               className="link link-hover"
//             >
//               info@stylorium.net
//             </a>
//           </p>
//         </div>

//         <div className="flex items-center w-4/6 gap-2 text-lg">
//           <FontAwesomeIcon icon={faPhone} />
//           <p>
//             Phone:{" "}
//             <a
//               href="tel:+8801730595698"
//               className="link link-hover"
//             >
//               +880 1730595698
//             </a>
//           </p>
//         </div>

//         <div className="flex items-center gap-2 text-lg">
//           <FontAwesomeIcon icon={faGlobe} />
//           <p>
//             Website:{" "}
//             <a
//               href="https://www.stylorium.net"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="link link-hover"
//             >
//               www.stylorium.net
//             </a>
//           </p>
//         </div>
//         </nav>
//         {/* mIddle */}
//         <nav className="text-lg">
//            <a className="ml-2 text-lg font-bold link link-hover md:mt-16">
//             USA Office
//           </a>
//           <div className="flex w-4/6 gap-2 mt-3">
//             <FontAwesomeIcon icon={faHouseChimney} />
//             <span className="-mt-2">
//               3000 N Ocean Blvd, ST# 102, Fort Lauderdale FL, 33308
//             </span>
//           </div>
//           <div className="flex items-center gap-2 ml-8 text-lg">
//             <FontAwesomeIcon icon={faEnvelope} />
//             <p>
//             Email:{" "}
//             <a href="mailto:les@stylylorium.net" className="link link-hover">
//               les@stylylorium.net
//             </a>
//           </p>
//           </div>
//           <div className="flex items-center w-4/6 gap-2 mb-3 ml-8 text-lg">
//             <FontAwesomeIcon icon={faPhone} />
//             <a href="tel:+17328956858">
//               Telephone: <span className="hover:underline">+1 732 895 6858</span>
//             </a>
//           </div>
//           <a className="ml-2 text-lg font-bold link link-hover">
//             India Office
//           </a>
//           <div className="flex w-4/6 gap-2 mt-3">
//             <FontAwesomeIcon icon={faHouseChimney} />
//             <span className="-mt-2">
//               Flat: N5 Crest View Jewel Richmond, Rajagiri Valley Kakkanad,
//               Kochi, Kerala India
//             </span>
//           </div>
//           <a className="text-lg font-bold link link-hover">Pakistan Office</a>
//           <div className="flex w-4/6 gap-2 mt-3">
//             <FontAwesomeIcon icon={faHouseChimney} />
//             <span className="-mt-2">
//               Dynasty Tower Adjacent Ocean Mall, 14th Floor, 1401 Clifton block
//               9. Karachi Pakistan
//             </span>
//           </div>
//         </nav>
//         <nav className="text-lg">
//           <h6 className="font-bold md:mt-16">Quick View</h6>

//           <div className="flex gap-2 ">
//             <FontAwesomeIcon icon={faCircleCheck} />
//             <NavLink to={"/gallery"}>
//               <a className="link link-hover">Product Gallery</a>
//             </NavLink>
//           </div>
//           <div className="flex gap-2 ">
//             <FontAwesomeIcon icon={faCircleCheck} />
//             <NavLink to={"/faq"}>
//               <a className="link link-hover">FAQ</a>
//             </NavLink>
//           </div>
//           <div className="flex gap-2 ">
//             <FontAwesomeIcon icon={faCircleCheck} />
//             <a className="link link-hover">R&D</a>
//           </div>
//           <a className="mt-5 text-lg font-bold link link-hover">
//             Sisters concern
//           </a>
//           <div className="flex w-full gap-2">
//             <img className="w-8 h-8 rounded" src={semo} alt="" />
//             <span className="">SIMO TEX</span>
//           </div>
//         </nav>
//       </div>
//       <div className="flex justify-center gap-5 px-10 py-4 mb-5 text-3xl border-base-300">
//         <a
//           href="https://www.facebook.com/StyloriumBD"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaFacebook />
//         </a>
//         <a
//           href="https://www.linkedin.com/company/stylorium-sourcing-limited"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaLinkedin />
//         </a>
//         <a
//           href="https://www.instagram.com/stylorium_sourcing_ltd"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaInstagram />
//         </a>
//       </div>
//       <footer className="p-4 footer footer-center bg-base-300 text-base-content">
//         <aside>
//           <p className="text-lg">
//             Copyright © {new Date().getFullYear()} - Stylorium Sourcing Ltd.
//           </p>
//         </aside>
//       </footer>
//     </footer>
//   );
// };

// export default Footer;

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
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/image/fontImage/headerImage.JPG";
import semo from "../../assets/image/semo.jpeg";

const ContactRow = ({ icon, prefix, href, text, item, className = "" }) => (
  <div className={`flex ${item?"items-start":"items-center"} gap-2 text-lg ${className}`}>
    <FontAwesomeIcon icon={icon} />
    {href ? (
      <p>
        {prefix}{" "}
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="link link-hover"
        >
          {text}
        </a>
      </p>
    ) : (
      <span className="-mt-2">{text}</span>
    )}
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-white relative mt-10">
      {/* Scroll to top */}
      <button
        className="w-16 h-16 bg-white text-[#1F2937] rounded-full border-2 border-black absolute left-[45%] bottom-[97%] md:left-[50%] md:bottom-[92%]"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FontAwesomeIcon icon={faAnglesUp} size="2xl" />
      </button>

      <div className="container p-5 pt-10 mx-auto md:py-10 footer">
        {/* Left */}
        <nav>
          <div className="m-5 text-lg md:mb-5 md:m-0">
            <img className="w-16 mx-auto h-14" src={logo} alt="" />
            <p className="pt-1 text-lg italic font-bold">
              100% Export Oriented Company
            </p>
          </div>
          <h6 className="text-2xl font-bold text-white">
            Stylorium Sourcing Ltd.
          </h6>
          <a className="text-lg link link-hover">Corporate Headquarters</a>

          <ContactRow
            icon={faHouseChimney}
            text="House: 43 (Level-5), Road: 17, Uttara, Dhaka-1230, Bangladesh"
            className="w-4/6 mt-3"
            item="start"
          />
          <ContactRow
            icon={faEnvelope}
            prefix="Email:"
            href="mailto:info@stylorium.net"
            text="info@stylorium.net"
          />
          <ContactRow
            icon={faPhone}
            prefix="Phone:"
            href="tel:+8801730595698"
            text="+880 1730595698"
            className="w-4/6"
          />
          <ContactRow
            icon={faGlobe}
            prefix="Website:"
            href="https://www.stylorium.net"
            text="www.stylorium.net"
          />
        </nav>

        {/* Middle */}
        <nav className="text-lg">
          <a className="ml-2 text-lg font-bold link link-hover md:mt-16">
            USA Office
          </a>
          <ContactRow
            icon={faHouseChimney}
            text="3000 N Ocean Blvd, ST# 102, Fort Lauderdale FL, 33308"
            className="w-4/6 mt-3"
          />
          <ContactRow
            icon={faEnvelope}
            prefix="Email:"
            href="mailto:les@stylylorium.net"
            text="les@stylylorium.net"
            className="ml-8"
          />
          <ContactRow
            icon={faPhone}
            prefix="Telephone:"
            href="tel:+17328956858"
            text="+1 732 895 6858"
            className="w-4/6 mb-3 ml-8"
          />

          <a className="ml-2 text-lg font-bold link link-hover">India Office</a>
          <ContactRow
            icon={faHouseChimney}
            text="Flat: N5 Crest View Jewel Richmond, Rajagiri Valley Kakkanad, Kochi, Kerala India"
            className="w-4/6 mt-3"
            item="start"
          />

          <a className="text-lg font-bold link link-hover">Pakistan Office</a>
          <ContactRow
            icon={faHouseChimney}
            text="Dynasty Tower Adjacent Ocean Mall, 14th Floor, 1401 Clifton block 9. Karachi Pakistan"
            className="w-4/6 mt-3"
            item="start"
          />
        </nav>

        {/* Right */}
        <nav className="text-lg">
          <h6 className="font-bold md:mt-16">Quick View</h6>
          <div className="flex gap-2 ">
            <FontAwesomeIcon icon={faCircleCheck} />
            <NavLink to={"/gallery"}>
              <a className="link link-hover">Product Gallery</a>
            </NavLink>
          </div>
          <div className="flex gap-2 ">
            <FontAwesomeIcon icon={faCircleCheck} />
            <NavLink to={"/faq"}>
              <a className="link link-hover">FAQ</a>
            </NavLink>
          </div>
          <div className="flex gap-2 ">
            <FontAwesomeIcon icon={faCircleCheck} />
            <a className="link link-hover">R&amp;D</a>
          </div>
          <a className="mt-5 text-lg font-bold link link-hover">
            Sisters concern
          </a>
          <div className="flex w-full gap-2">
            <img className="w-8 h-8 rounded" src={semo} alt="" />
            <span className="">SIMO TEX</span>
          </div>
        </nav>
      </div>

      {/* Social */}
      <div className="flex justify-center gap-5 px-10 py-4 mb-5 text-3xl border-base-300">
        <a
          href="https://www.facebook.com/StyloriumBD"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.linkedin.com/company/stylorium-sourcing-limited"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/stylorium_sourcing_ltd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Bottom */}
      <footer className="p-4 footer footer-center bg-base-300 text-base-content">
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
