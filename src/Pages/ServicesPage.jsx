import Nav from "../components/Navber/Nav";
import services from '../assets/image/complians/services.jpeg'
import servicescover from '../assets/image/complians/servicescover.jpg'
const ServicesPage = () => {
  return (
   <div>
     <Nav isVisible={true} />
       <div className="font-sans text-gray-700 mt-28">
      {/* Hero Section */}
    <div className="relative bg-gray-100">
  {/* Main Section */}
  <div
    className="relative bg-cover bg-center h-[600px]"
    style={{ backgroundImage: `url(${servicescover})` }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>

    {/* Content */}
    <div className="relative flex flex-col items-center justify-center h-full px-4 text-center text-white">
      <h2 className="text-5xl font-bold">Our Services</h2>
      <p className="mt-2 text-lg">Reliable Apparel Best Manufacturing Solution</p>
    </div>
  </div>

  {/* Wave Effect */}
<div className="absolute w-full -bottom-0">
<div className="relative w-full overflow-hidden leading-[0]">
    <svg
      className="relative block w-full h-[100px]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,49.98C150,150,350,-50,600,49.98s450,100,600,0V120H0Z"
        className="fill-white"
      />
    </svg>
  </div>
</div>
    </div>
      {/* Our Values Section */}
      <div className="container p-8 mx-auto">
      {/* Heading */}
     

      <div className="flex flex-col items-start gap-8 lg:flex-row">
        {/* Left Section */}
        <div className="flex-1 space-y-6">
        <div className="mb-8 ">
        <h2 className="text-[#4E5896] text-5xl py-9 font-bold uppercase">Our Services</h2>
        <p className="max-w-3xl mt-4 text-xl text-gray-600">
        <span className="font-bold logo-color">Stylorium Sourcing Ltd</span> is committed to provide our best customer service and quality assurance at a very competitive price. We provide our customer with samples and inspiration from our collection. In addition, our designer prepares our own design and converts customer concepts in to a real product. We are associated with top rated factories (Woven, jersey and Flat Bed Knitwear) in Bangladesh, India and Pakistan, who are highly organized quality products. Our comprehensive services are not only limited to the best sourcing house, buying arrangement, meeting with best manufacturer in the industry, sample development, sample approval, production quality control and timely shipment but also we take more ownership and responsibilities on our shoulders on your behalf in order to make sure risks are minimized and quality of products are not compromised.
        </p>
        <p className="mt-4 text-xl">
        We have dynamic, talented and well-experienced team with a great office structure, including fabric sourcing, garment technologist & compliance. Range of product that we offer for women’s wear, Men’s wear and children wear as well as Non-Textile item.

        </p>
      </div>
          {/* Value Point 1 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              To Our Clients Who Let Us Keep On Moving
            </h3>
            <ul className="pl-5 mt-2 space-y-2 text-xl text-gray-600 list-disc">
            <li><strong>Woven</strong> – Tops, bottoms, dresses, and tailoring.</li>
  <li><strong>Outerwear</strong> – Jackets and coats.</li>
  <li><strong>Jersey</strong> – Tops, bottoms, dresses, sleepwear.</li>
  <li><strong>Flat Knit</strong> – From 3GG to 14GG.</li>
  <li><strong>Circular Knit</strong> – Jersey and heavy knit.</li>
  <li><strong>Footwear</strong> – Leather and synthetic.</li>
  <li><strong>Household</strong> – All kinds of household items. ISCC, RSC, GRS, etc., certified.</li>
  <li><strong>Gloves</strong> – Leather gloves, working gloves, gardening gloves.</li>
  <li><strong>Wooden Items</strong> – All kinds of wooden items.</li>
  <li><strong>Payment Mode</strong> – We accept sales contract TT, L/C, DAP.</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 md:mt-32">
          <img
            src={services}
            alt="img"
            className="rounded-lg mx-auto h-[760px] shadow-lg"
          />
        </div>
      </div>
      <div className="flex">
          <div className="container mx-auto mt-10 mb-4 lg:w-1/2">
        <h1 className="text-3xl font-bold">Our Offered</h1>
        <ul className="pl-5 mt-2 space-y-2 text-xl text-gray-600 list-disc">
          <li>Product development, pattern and sample approval.</li>
          <li>Fabric and accessories approval.</li>
          <li>Evaluate and introduce factories which has the proper setup for knit or woven products and also capable of manufacture and deliver products as per buyer requirements within the given time.</li>
          <li>Check production capacities and quality assurance of factories.</li>
          <li>Ensure that the quality & specification of approved samples are maintaining in the production process</li>
          <li>Check & confirm that the correct materials, fabric, accessories and components are used for production</li>
          <li>Perform quality check and prepare production report in each & every step to make sure production is running as per schedule</li>
          <li>Communication, follow up and keeping buyers update on a regular basis</li>
          <li>Pre-shipment inspection of garments</li>
          <li>Inspect and confirm the packing process, cartoon measurement, shipping mark and loading process as per buyers requirements</li>
          <li>Witness & confirm the loading of inspected consignment</li>
          <li>Perform and carry out other special requirements of buyers (if any)</li>
        </ul>
       
        </div>
          {/* Right Video */}
          <div className="mt-8 lg:w-1/2 lg:mt-32 lg:ml-16">
  <div className="relative">
    <video
      className="w-full h-auto rounded-lg shadow-lg"
      autoPlay
      muted
      loop
    >
      <source
        src="https://res.cloudinary.com/de8yddexc/video/upload/v1737121956/SSL/emexk3wpcs5pmj1ctev6.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </div>
        </div>
      </div>
      <p className="text-2xl">Quality remains the cornerstone of our company and we ensure that all our products that reach the clients all across the world exceptional in quality. We want to have strong and long lasting relations with our clients and this propels us to cater them the best of our services.</p>
    </div>
    </div>
   </div>
  );
};

export default ServicesPage;
