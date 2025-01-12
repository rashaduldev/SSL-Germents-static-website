import { FaCircle, FaRegCircle } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";

const OurConcept = () => {
  return (
    <div className="bg-white py-10 px-4 mb-10 md:px-16">
      {/* Header */}
      <div className="flex flex-col items-center justify-center pt-10 bg-white">
        {/* Title Section */}
        <div className="relative text-center">
          <h2 className="text-5xl font-bold text-[#495598]">Our Concept</h2>
          <div className="absolute left-0 right-0 top-full flex items-center justify-center mt-4">
            <div className="h-3 w-3 bg-red-600 rounded-full" />
            <div className="h-1 w-56 bg-red-600" />
            <div className="h-3 w-3 bg-red-600 rounded-full" />
          </div>
        </div>

        {/* Logo Section */}
        <div className="mt-10 flex flex-col items-center">
          {/* Circle with Gradient Border */}
          <div
            className="relative w-32 h-32 rounded-full flex items-center justify-center"
            style={{
              background: `conic-gradient(
                #67F79D 0% 22%,
                transparent 22% 44%,
                #F98A29 44% 66%,
                #F0A8D7 66% 88%,
                #8EF5E3 88% 100%
              )`,
            }}
          >
            {/* Inner Circle */}
            <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-[#009688]">SSL</span>
            </div>
          </div>
          <div className="mt-2 flex flex-col gap-1">
            <div className="bg-gray-400 rounded-full">
              <FaRegCircle />
            </div>
            <div className="bg-gray-400 rounded-full">
              <FaRegCircle />
            </div>
            <div className="bg-gray-400 rounded-full">
              <FaRegCircle />
            </div>
            <div className="bg-gray-400 rounded-full">
              <FaRegCircle />
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative flex flex-col items-center -mt-32 md:-mt-20 md:items-start">
        {/* Vertical Center Line */}
        <div
          className="absolute top-48 md:top-24 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-300"
          style={{
            height: window.innerWidth >= 768 ? 'calc(100% - 9rem)' : 'calc(100% - 15rem)',
          }}
        />

        {/* Steps */}
        <Step
          position="right"
          number="01"
          title="ETHICS"
          description="We are working constructively to influence proposed laws and regulations. Also follow corporate guidelines and rules of foreign principle."
          iconColor="text-red-500"
        />
        <Step
          position="left"
          number="02"
          title="QUALITY"
          description="Keep satisfy customer with superior quality & ensure our best product."
          iconColor="text-blue-500"
        />
        <Step
          position="right"
          number="03"
          title="PRICE"
          description="Provide quality products with competitive price for achieve customers complete satisfaction."
          iconColor="text-green-500"
        />
        <Step
          position="left"
          number="04"
          title="SPEED"
          description="Our employees work daily to find newer & better ways to deliver quality goods on time."
          iconColor="text-yellow-500"
        />
        <Step
          position="right"
          number="05"
          title="DESIGN"
          description="Our efforts for innovation and excellence enable us to earn great acclamation."
          iconColor="text-orange-500"
        />
        <Step
          position="left"
          number="06"
          title="COMMUNICATION"
          description="To ensure work in our level of seniority we always keep better communication."
          iconColor="text-purple-500"
        />
        <Step
          position="right"
          number="07"
          title="CAPACITY"
          description="We respect any purchase order quantity for work in our level of seniority."
          iconColor="text-pink-500"
        />
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Step = ({ position, number, title, description, iconColor }) => {
  return (
    <div
      className={`relative flex w-full mt-20 md:mt-0 -mb-5 ${position === "left" ? "justify-start" : "justify-end"}`}
    >
      {/* Step Content */}
      <div
        className={`flex items-center md:gap-0 gap-7 ${position === "left" ? "flex-row-reverse" : "flex-row"} w-full md:w-1/2`}
      >
        {/* Icon */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white border-4 border-gray-300 rounded-full`}
        >
          <FaCircle className={`text-xs ${iconColor}`} />
          
        </div>
        <h1 className="flex items-center gap-1">
          <FaRegCircle className={`text-xs ${iconColor}`} />
          <FaRegCircle className={`text-xs ${iconColor}`} />
          <FaRegCircle className={`text-xs ${iconColor}`} />
          <FaRegCircle className={`text-xs ${iconColor}`} />
          <FaRegCircle className={`text-xs ${iconColor}`} />
        </h1>
        <div className="relative">
          <p
            className={`text-8xl transform scale-y-[.7] ${
              position === "left" ? `${iconColor}` : `-scale-x-100 ${iconColor}`
            }`}
          >
            <FiMessageCircle />
          </p>
          <h1
            className={`absolute top-[29px] text-2xl font-bold left-[29px] ${iconColor}`}
          >
            SSL
          </h1>
        </div>

        {/* Text Box */}
        <div
          className={`mt-16 p-0 bg-white rounded-md ml-4 ${position === "left" ? "text-right" : "text-left"}`}
        >
          <h3 className={`font-bold text-sm md:text-lg ${iconColor}`}>
            {number}. {title}
          </h3>
          <p className="text-gray-600 md:text-xl text-sm max-w-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default OurConcept;
