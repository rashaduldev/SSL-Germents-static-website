import menImage from "../assets/image/aboutus/men.png";
import womenImage from "../assets/image/aboutus/women.png";

const teamMembers = [
  {
    name: "Yousuf Sarker",
    role: "Managing Director",
    rating: 5,
    image: menImage,
  },
  {
    name: "Mst Peara Akter",
    role: "Chairman",
    rating: 5,
    image: womenImage,
  },
  {
    name: "Golam Sarowar (Rajib)",
    role: "Sr. Merchandiser",
    rating: 5,
    image: menImage,
  },
  {
    name: "Nasir Uddin",
    role: "QC Team Leader",
    rating: 5,
    image: menImage,
  },
  {
    name: "Shuhrat Firooz",
    role: "Designer",
    rating: 5,
    image: womenImage,
  },
  {
    name: "Rohaida Akhter Prity",
    role: "Compliance Auditor",
    rating: 5,
    image: womenImage,
  },
  {
    name: "Md Yusuf Miah",
    role: "Manager (IT)",
    rating: 5,
    image: menImage,
  },
  {
    name: "Suchana Rani Bristi",
    role: "Commercial & Merchandising Lead",
    rating: 5,
    image: womenImage,
  },
  {
    name: "Rabbe Hossain",
    role: "Asst. Merchandiser",
    rating: 5,
    image: menImage,
  },
];

const TeamGrid = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group relative bg-white border border-gray-100 rounded-xl p-6 text-center flex flex-col items-center justify-center shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-gray-300 transition-all duration-300 ease-out"
          >
            <div className="overflow-hidden rounded-full mb-4 border-2 border-gray-100 group-hover:border-yellow-400 transition-colors duration-300">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Name */}
            <h3 className="font-bold text-lg text-gray-800 group-hover:text-black transition-colors">
              {member.name}
            </h3>

            {/* Role */}
            <p className="text-sm text-gray-500 font-medium mt-1">
              {member.role}
            </p>

            {/* Star Rating with Scale Effect */}
            <div className="flex justify-center mt-3 gap-1 transform group-hover:scale-110 transition-transform duration-300">
              {Array.from({ length: member.rating }, (_, i) => (
                <span key={i} className="text-yellow-400 text-lg">
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;