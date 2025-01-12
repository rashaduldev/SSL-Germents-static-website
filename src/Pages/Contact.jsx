import { CiLocationOn } from "react-icons/ci";
import ContactForm from "../components/HomepageComponent/ContactForm";
import Nav from "../components/Navber/Nav";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import SecondNavImg from "../components/SecondNavImg";
import img from "../assets/image/Contact-us-top-banner.jpg";

const ContactPage = () => {
  return (
    <div>
      <Nav isVisible={true} />
      <div className="w-full">
        {/* Header Section */}
        <SecondNavImg text="Contact us" img={img} />

        {/* Contact Info Section */}
        <section className="text-center py-12 mt-5">
          <h2 className="text-gray-500 text-md font-bold">REACHING OUR OFFICE</h2>
          <h3 className="text-3xl font-bold mb-8 text-gray-600">FIND OUR LOCATION</h3>

          <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
            {/* Card 1 */}
            <div className="bg-[#4D5891] text-white w-80 p-6 rounded-lg flex flex-col items-center h-[26vh]">
              <span className="text-white text-3xl mb-4">
                <CiLocationOn />
              </span>
              <h4 className="font-bold text-lg">VISIT OUR OFFICE</h4>
              <p>House: 43 (Level-5), Road: 17, Uttara, Dhaka-1230, Bangladesh</p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#4D5891] text-white w-80 p-6 rounded-lg flex flex-col items-center h-[26vh]">
              <span className="text-white text-3xl mb-4">
                <MdOutlineMailOutline />
              </span>
              <h4 className="font-bold text-lg">EMAIL US</h4>
              <p>info@stylorium.net</p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#4D5891] text-white w-80 p-6 rounded-lg flex flex-col items-center h-[26vh]">
              <span className="text-white text-3xl mb-4">
                <FiPhone />
              </span>
              <h4 className="font-bold text-lg">CALL US</h4>
              <p>+880 1730595698</p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4365.726314398524!2d90.38122279999999!3d23.875499799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d683468939%3A0x68a0e1ae158444d0!2sStylorium%20Sourcing%20Limited!5e1!3m2!1sen!2sbd!4v1736414796756!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            loading="lazy"
            title="Stylorium Sourcing Limited Location Map"
          ></iframe>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
