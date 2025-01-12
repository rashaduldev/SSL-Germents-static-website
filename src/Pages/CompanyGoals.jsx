import { AiOutlineArrowRight } from "react-icons/ai";
import Nav from "../components/Navber/Nav";
import SecondNavImg from "../components/SecondNavImg";
import navBgimg from '../assets/image/Company-Goal-Top.jpg'

const CompanyGoals = () => {
  return (
   <div>
     <Nav isVisible={true} />
     <SecondNavImg text="Goal" img={navBgimg}/>
     <div className="bg-blue-500 text-white py-16 px-4 flex flex-col items-center rounded-lg shadow-md container mx-auto mt-20">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
      COMPANY OBJECTIVES
      </h2>

      {/* Description */}
      <p className="text-sm md:text-lg text-center mb-8 max-w-7xl px-5 md:px20 py-3">
      Our goal is to provide our clients with high-quality products that meet their quality expectations. SSL employs quality assurance staff to assist in the selection of manufacturers who manufacture products according to Standards set by our policy, principles, and guidelines. The latest technology is being used by buyer own portal, therefore the buyer will get real-time updates on the products.
      </p>
      {/* Background Decorative Circles */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="absolute bg-blue-400 opacity-20 rounded-full h-40 w-40 top-10 left-10"></div>
        <div className="absolute bg-blue-400 opacity-20 rounded-full h-24 w-24 bottom-10 right-10"></div>
        <div className="absolute bg-white opacity-10 h-16 w-16 rounded-full"></div>
        <div className="absolute h-48 w-48 opacity-10">
          <svg
            viewBox="0 0 100 100"
            className="h-full w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="dots"
                x="0"
                y="0"
                width=".1"
                height=".1"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1" cy="1" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#dots)" />
          </svg>
        </div>
      </div>
    </div>
     <div className="pt-10 flex flex-col items-center my-10 pb-10">
      {/* Success Section */}
      <div className="relative my-12">
        <div className="flex items-center justify-center">
          <div className="h-12 w-12 bg-[#4C578D] rounded-full flex items-center justify-center">
            <AiOutlineArrowRight className="text-white text-2xl" />
          </div>
        </div>
        <h2 className="text-center text-4xl md:text-5xl text-[#4C578D] font-bold mt-6">
          SUCCESS
        </h2>
      </div>

      {/* Key Points Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 container mx-auto">
        {/* Teamwork */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-blue-600 mb-2">Team Work</h3>
          <p className="text-gray-600">
            Teamwork is the key to the success of any project. Team members
            complement and support each other, which positively affects the
            result of the work.
          </p>
        </div>
        {/* Success */}
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-green-600 mb-2">Success</h3>
          <p className="text-gray-600">
            Achieving success depends on teamwork and a carefully crafted
            project plan.
          </p>
        </div>
        {/* Creative */}
        <div className="bg-red-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-red-600 mb-2">Creative</h3>
          <p className="text-gray-600">
            A creative approach to working on a project allows you to create
            unique products that are not similar to those on the market. This
            gives an additional competitive advantage.
          </p>
        </div>
        {/* Express Goals Positively */}
        <div className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-purple-600 mb-2">
            Express Goals Positively
          </h3>
          <p className="text-gray-600">
            Rapid response to changing situations allows resources to be
            redirected and the project completed within a predetermined time
            frame.
          </p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default CompanyGoals;