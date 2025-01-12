import Nav from "../components/Navber/Nav";
import SecondNavImg from "../components/SecondNavImg";
import quality from '../assets/image/quality.jpeg';
import qualityvedio from '../assets/video/Quality.mp4';

const QualityPage = () => {
  return (
   <div>
    <Nav isVisible={true} />
    <SecondNavImg text="Quality" img={quality}/>
         <div className="container mx-auto px-4 py-10">
      {/* Title Section */}
     

      {/* Description Section */}
      <p className="text-2xl text-gray-700 leading-relaxed mb-6">
        At <span className="text-blue-500 font-bold">Stylorium Sourcing Ltd</span>, quality is the core! From the first sample, we take care of the quality at every step. Our highly qualified quality and control/assurance team is always alert to deal with any situation. We identify the key points of each product to anticipate possible difficulties in production.
      </p>
      <p className="text-2xl text-gray-700 leading-relaxed mb-6">
        Our Quality Department is totally independent from the Merchandising and Production departments, and their only goal is to achieve the <span className="font-bold">AQL quality requirement</span>. To ensure the quality of the products, we take the following precautions:
      </p>

      {/* Precautions Section */}
     <div className="flex flex-col md:flex-row">
        <div className="flex-1">
        <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
        <li>
          <span className="font-bold text-2xl">Measuring garment dimensions.</span>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li>Specifying tolerances for garment dimensions.</li>
          </ul>
        </li>
        <li>
          <span className="font-bold text-2xl">Physical tests of buttons, zippers, and other accessories.</span>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li>Pull test.</li>
            <li>Fatigue test.</li>
            <li>Stretch test.</li>
          </ul>
        </li>
        <li>
          <span className="font-bold text-2xl">Fabric density & composition test by 4.0 system.</span>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li>Fabric GSM check.</li>
            <li>Lab testing.</li>
            <li>Shrinkage checking.</li>
            <li>Stitches per inch (SPI) check.</li>
            <li>Material composition check.</li>
          </ul>
        </li>
        <li>
          <span className="font-bold text-2xl">Color and shade matching.</span>
        </li>
      </ul>

      {/* Additional Content */}
      <div className="mt-10">
        <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
          <li>Label verification.</li>
          <li>Daily production report analyzing.</li>
          <li>Data storing and PP meeting presentation.</li>
          <li>Packaging inspections.</li>
          <li>
            Conduct the inline and FRI (AQL 1.5-2.5) as per buyer manual as well.
          </li>
        </ul>
        <p className="text-xl text-gray-700 leading-relaxed mt-6">
          Stylorium offers a global solution of quality, adapted to the buyer&apos;s needs. We also collaborate with the major 3rd party inspection companies (
          <span className="font-bold text-2xl">SGS, Intertek, Bureau Veritas</span>) as per buyer&apos;s requirement.
        </p>
      </div>
        </div>
        <div className="flex-1 mx-auto">
        <div className="flex-1 mx-auto">
          <video 
            src={qualityvedio} 
            autoPlay 
            loop 
            muted 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
       </div>
     </div>

      {/* Innovation Section */}
      <div className="mt-5">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Innovation</h2>
        <p className="text-2xl text-gray-700 leading-relaxed">
          We are constantly looking forward to new fabrics, accessories, washes, print, and embroidery techniques. In this way, we use our shore-to-shore sourcing network to offer the greatest variety to our customers. We are also constantly trying to improve the production processes in our local and foreign fabric sourcing team.
        </p>
      </div>
    </div>
   </div>
  );
};

export default QualityPage;
