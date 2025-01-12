import Nav from "../components/Navber/Nav";
import SecondNavImg from "../components/SecondNavImg";
import TestimonialSlider from "./AboutUsTeammember";
import navBgimg from '../assets/image/About-us-top-image.jpeg'
import aboutusimg from '../assets/image/aboutus.jpeg'

const AboutUs = () => {
  return (
    <div>
      {/* Fixed Navigation Bar */}
      <Nav isVisible={true} />
      <div className="">
        {/* Header */}
        <SecondNavImg text="About Us" img={navBgimg}/>
        {/* Image and About Section */}
        <div className="md:flex space-x-8 container mx-auto mt-10">
          <div className="flex-1">
            <img
              src={aboutusimg}
              alt=" About Our Company"
              className="rounded-md w-full h-[80%]"
            />
          </div>
          <div className="mt-4 md:mt-0 flex-1">
            <h3 className="text-4xl font-semibold mt-5"> About Our Company</h3>
            <p className="mt-4 text-gray-700 text-lg">
            STYLORIUM SOURCING LTD is prominent readymade garment sourcing, buying agent and exporter with a vision to deliver world-class service, quality solutions and value addition services to end products for the textile and non-Textile industries on a global level, beginning from fabrics to fashion through market knowledge, experienced sourcing professionals. SSL presently located at Dhaka, Bangladesh.

            </p>
            <p className="mt-4 text-gray-700 text-lg">
            Apart from our sourcing and buying office we have our fabric sourcing office in India, Pakistan & China.
            </p>
            <p className="mt-4 text-gray-700 text-lg">
            We have own fabric manufacturing, designing and sourcing facilities in Bangladesh . SSL offers apparel sourcing, production and quality assurance, supply chain solutions towards building a stake holding approach to business.
            </p>
          </div>
        </div>
       {/* Team Members Section */}
        <div className="container mx-auto">
          <h4 className="text-4xl font-bold text-center mt-24 text-gray-600 mb-16 uppercase">Team Members</h4>
        <div className="my-20">
        <TestimonialSlider/>
      </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
