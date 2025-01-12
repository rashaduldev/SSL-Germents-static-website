import Nav from "../components/Navber/Nav";

const OfferedServices = () => {
  return (
 <div>
     <Nav isVisible={true} />
       <section className="">
      <div className="max-w-4xl mx-auto bg-white rounded-lg p-6 md:p-10">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Offered Services</h2>
        
        <ul className="space-y-4 mb-6 text-gray-700 text-[17px]">
          {[
            "Product development, pattern and sample approval.",
            "Fabric and accessories approval.",
            "Evaluate and introduce factories which have the proper setup for knit or woven products and are also capable of manufacture and deliver products as per buyer requirements within the given time.",
            "Check production capacities and quality assurance of factories.",
            "Ensure that the quality & specification of approved samples are maintained in the production process.",
            "Check & confirm that the correct materials, fabric, accessories, and components are used for production.",
            "Perform quality checks and prepare production reports at each & every step to ensure production is running as per schedule.",
            "Communication, follow-up, and keeping buyers updated on a regular basis.",
            "Pre-shipment inspection of garments.",
            "Inspect and confirm the packing process, carton measurement, shipping mark, and loading process as per buyers' requirements.",
            "Witness & confirm the loading of inspected consignment.",
            "Perform and carry out other special requirements of buyers (if any)."
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-red-500 mr-2">✓</span>
              <p>{item}</p>
            </li>
          ))}
        </ul>

        <div className="text-gray-700">
          <p className="mb-2 text-[17px]">
            Quality remains the cornerstone of our company, and we ensure that all our products that reach clients across the globe are exceptional in quality. We want to have strong and long-lasting relationships with our clients, and this propels us to cater to them with the best of our services.
          </p>
        </div>
      </div>
    </section>
 </div>
  );
};

export default OfferedServices;
