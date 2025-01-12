import Nav from "../components/Navber/Nav";
const images = [
  "https://hooversagrovet.com/wp-content/uploads/2020/09/mission.jpg",
  "https://www.khmconsultancy.com/images/vision.jpg",
  "https://img.freepik.com/free-vector/gradient-core-values-infographics_23-2149066996.jpg",
  "https://via.placeholder.com/150",
];

const MissionInfographic = () => {
  return (
   <div>
    <Nav isVisible={true}/>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-0 p-8 container mx-auto mt-28">
      {/* Mission */}
      <div className="bg-[#d8ca0b] text-white p-6 flex flex-col justify-center">
        <h2 className="text-3xl font-bold">OUR MISSION</h2>
        <p className="mt-4 text-lg">
        Setting up an ethical business standard by providing a safe and rewarding work environment, implementing Eco-friendly technologies through trained and knowledgeable work force to offer highest level of customer satisfaction. Ensuring sustainable growth through innovation, research and operational efficiencies.
        </p>
      </div>
      <div className="flex justify-center items-center bg-gray-100">
        <img src={images[0]} alt="Mission" className="w-full h-auto" />
      </div>
      {/* Vision */}
      <div className="flex justify-center items-center bg-gray-100">
        <img src={images[1]} alt="Vision" className="w-full h-auto" />
      </div>
      <div className="bg-orange-600 text-white p-6 flex flex-col justify-center">
        <h2 className="text-3xl font-bold">OUR VISION</h2>
        <p className="mt-4 text-lg">
        Our vision is to comprehensive procurement management, world class sourcing, product development services with assurance, competitive pricing, and being the fast turnaround time with world class service and supply chain leader in the export industries.
        </p>
      </div>

      {/* Values */}
      <div className="bg-teal-600 text-white p-6 flex flex-col justify-center">
        <h2 className="text-3xl font-bold">OUR VALUES</h2>
        <p className="mt-4 text-lg">
        It is an undying fact that in this fascinating world what sizzling today is not so tomorrow. Our continuous effort and expertise in this field makes us to show the latest and the best in terms of fashion and innovation.
        </p>
      </div>
      <div className="flex justify-center items-center bg-gray-100">
        <img src={images[2]} alt="Values" className="w-full h-auto" />
      </div>
    </div>
   </div>
  );
};

export default MissionInfographic;
