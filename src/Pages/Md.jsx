import Nav from "../components/Navber/Nav";
import logoimg from "../assets/image/fontImage/headerImage.JPG";
import mdphoto from "../assets/image/MD.JPG";
import signature from "../assets/image/signature.png"

const Md = () => {
  return (
  <div>
    <Nav isVisible={true}/>
          <div className="border border-gray-300 rounded-lg shadow-lg container mx-auto my-8 bg-white mt-36">
      {/* Top Border */}
      <div className="h-10 bg-[#3e53c7] relative">
        <div className="absolute inset-x-0 top-0 h-10 bg-[#4d578d]" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)' }}></div>
      </div>
      
      {/* Content */}
      <div className="p-8 px-10">
        {/* Company Logo and Name */}
        <div className="flex items-center mb-6">
          <img src={logoimg} alt="Company Logo" className="h-16 mr-4" /> {/* Replace with actual logo path */}
          <h1 className="text-lg md:text-4xl font-bold text-gray-800">Stylorium Sourcing Ltd.</h1>
        </div>
        
          <div className="flex flex-row ">
          <div className="w-[80%] pr-10">
                {/* Header */}
                <h2 className="text-lg md:text-4xl font-bold mb-4">Message from the Managing Director</h2>
                
                {/* Description */}
                <p className="text-gray-700 mb-6 md:text-2xl tracking-normal leading-10">
                Dear Patrons, Shareholders and Valued Customers:
                </p>
                <p className="text-gray-700 md:text-2xl tracking-normal leading-10">
                It is a great pleasure that I welcome you to the <b className="text-lg">STYLORIUM SOURCING LTD.</b>
                </p>
                <p className="text-gray-700 mb-6 md:text-2xl tracking-normal leading-10">
                We entered into the ‘Garments Industry’ & Sourcing in 2020 & since then our prime objective remained making continuous improvement in quality, production & work place. We constantly strive for better solutions, environment friendly product, quality & productivity by investing adequately infrastructure, technology and human resources. 
                </p>
             </div>
        
        {/* Right Image */}
        <div className="w-[20%]">
          <img src={mdphoto} alt="CEO" className="md:w-64 md:h-64 w-20 h-20 object-cover rounded-lg shadow-md" /> {/* Replace with actual image path */}
        </div>
          </div>
          <div>
            <div className="md:text-2xl space-x-9 tracking-normal leading-10">Our experienced and dedicated management team and professionally skilled work force is continuously striving towards the common goal of our company to identity the needs of our customers and provide professional support to meet the ever-increasing quality demand of our valued clients. Our vision and mission are to be a highly reputed garment suppliers in the international market as well as contribute into the national economy doing best quality products following all the safety measures in order to mitigate all complaint factors for the employees, customers and the environment. Our company has been able to earn a reputation which is well recognized by most of our satisfied buyers. We are shaping our strategy to be one of the world’s most valuable, innovative and admired companies. 
                <br /> <br />
                Our goal is to be an unstoppable company that creates enormous demand and vale of our patrons. SSL is silently contributing is shaping country’s economy. We have strong environment friendly practices in every work place, world class compliance facilities in our factories. To ensure the most efficient use of power, we rely on the highest utilization of natural light which has been facelifted by modern architectural design by renewed and expert engineer. We firmly believe that quality is achieved through persistent dedicated efforts. Achieving high quality standard and timely delivery has been our prime objective and in order to achieve the set goals our experienced management team is working hard in hand with a highly professionally skilled and dedicated work force.  <br /> <br />
                We have a flexible setup to adopt ourselves to meet the diversified need of our customers. We have a healthy and safe working environment for our workers, whom we consider as our strength. We strongly believe that quality is of the top priority which is achieved through dedicated continuous efforts. We would like to welcome you for any further inquiry you may have about our company and our products.
         <br /> <br />
           Stay Safe and Stay Well. May the Almighty be always with us.
            </div>
          </div>
        
        {/* Signature Section */}
        <div className="mt-8">
          <img className="border-b border-black" src={signature} alt="Signature" />
          <h3 className="font-bold ml-0 text-[18px]">Yousuf Serker</h3>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="h-10 bg-[#3e53c7] relative">
        <div className="absolute inset-x-0 top-0 h-10 bg-[#4d578d]" style={{ clipPath: 'polygon(100% 0%, 0% 0%, 100% 100%)' }}></div>
      </div>
      
      {/* Footer */}
      <div className="text-center py-4 bg-gray-100">
        <p className="text-gray-700">www.stylorium.net</p>
      </div>
    </div>
  </div>
  );
};

export default Md;
