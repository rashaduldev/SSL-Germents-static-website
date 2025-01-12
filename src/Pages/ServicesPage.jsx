import Nav from "../components/Navber/Nav";
import services from '../assets/image/complians/services.jpg'
import servicescover from '../assets/image/complians/servicescover.jpg'
import vedio from '../assets/video/Why_choose_SSL.mp4'
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
    <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">
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

      {/* The Way We Work Section */}
      <section className="py-16 container mx-auto">
      {/* Section Title */}
      <h2 className="text-[#4E5896] text-3xl font-bold uppercase">
        The Way We Work
      </h2>

      {/* Content Wrapper */}
      <div className="flex flex-col lg:flex-row lg:items-center">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <p className="text-2xl font-medium mb-4">
            we design for{" "}
            <span className="text-green-600 font-bold">sustainability</span> and
            produce for a{" "}
            <span className="text-green-600 font-bold">greener</span> future.
          </p>
          <p className="mb-4">
            We are dedicated to crafting sustainable fashion, where every
            garment reflects our commitment to a greener future. By blending
            innovative design with eco-friendly practices, we ensure that our
            creations not only look good but also do good for the environment.
            At the heart of our mission is the belief that fashion should leave
            a positive impact on the planet, and we&apos;re working tirelessly to
            make that a reality.
          </p>
          <div className="flex items-start mb-6">
            <div className="mr-2 text-[#4E5896]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-6 w-6"
                viewBox="0 0 16 16"
              >
                <path d="M16 8a8 8 0 1 1-16 0 8 8 0 0 1 16 0zM5.293 7.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0-1.414-1.414L7 9.586 5.293 7.293z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold">Our Mission:</h3>
              <p className="text-xl">
                Our mission is to deliver high-quality, stylish, and sustainable
                garments that meet the diverse needs of our global customers.
              </p>
            </div>
          </div>
        </div>

        {/* Right Video */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-16">
  <div className="relative">
    <video
      className="w-full h-auto rounded-lg shadow-lg"
      // controlss
      autoPlay
      muted
      loop
      // poster="https://via.placeholder.com/600x400"
    >
      <source
        src={vedio}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </div>
</div>

      </div>
    </section>

      {/* Our Values Section */}
      <div className="p-8 container mx-auto">
      {/* Heading */}
     

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Section */}
        <div className="flex-1 space-y-6">
        <div className=" mb-8">
        <h2 className="text-[#4E5896] text-5xl py-9 font-bold uppercase">Our Services</h2>
        <h1 className="text-3xl font-bold mt-2">
          We’ve been create building for over 10 years
        </h1>
        <p className="text-gray-600 mt-4 text-xl max-w-3xl">
        Stylorium Sourcing Ltd is committed to provide our best customer service and quality assurance at a very competitive price. We provide our customer with samples and inspiration from our collection. In addition, our designer prepares our own design and converts customer concepts in to a real product. We are associated with top rated factories (Woven, jersey and Flat Bed Knitwear) in Bangladesh, India and Pakistan, who are highly organized quality products. Our comprehensive services are not only limited to the best sourcing house, buying arrangement, meeting with best manufacturer in the industry, sample development, sample approval, production quality control and timely shipment but also we take more ownership and responsibilities on our shoulders on your behalf in order to make sure risks are minimized and quality of products are not compromised.
        </p>
        <p className="text-xl mt-4">
        We have dynamic, talented and well-experienced team with a great office structure, including fabric sourcing, garment technologist & compliance. Range of product that we offer for women’s wear, Men’s wear and children wear as well as Non-Textile item.

        </p>
      </div>
          {/* Value Point 1 */}
          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              To Our Clients Who Let Us Keep On Moving
            </h3>
            <ul className="text-gray-600 mt-2 space-y-2 text-xl list-disc pl-5">
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
        <div className="flex-1 ">
          <img
            src={services}
            alt="img"
            className="rounded-lg mx-auto h-[760px] w-full shadow-lg"
          />
        </div>
      </div>
    </div>
    </div>
   </div>
  );
};

export default ServicesPage;
