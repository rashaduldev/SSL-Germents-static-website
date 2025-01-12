import Nav from "../components/Navber/Nav";
import SecondNavImg from "../components/SecondNavImg";
import navBgimg from '../assets/image/Strength_Top_Image.jpg'

const StrengthSection = () => {
  return (
    <div>
         <Nav isVisible={true} />
         <SecondNavImg text="Strength" img={navBgimg}/>
        <section className="bg-gray-100 py-8 px-6 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Strength</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Strong sustainable sourcing team for product, factory, fabrics, trims, and accessories, keeping commitment. Strategic office location - easy to go to the production facilities.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Long and proven experience in RMG & Non-RMG sector.</li>
          <li>Own sample section with a well-experienced team.</li>
          <li>We are using CIMA, BCI, and Organic cotton.</li>
          <li>
            Our better work (ILOO, BSCI, SEDEX, ACCORD, RSC, ISO, RAX, OEO-TEX
            standard 100, and FSC certified).
          </li>
          <li>Yearly turnover: USD 80 million yearly.</li>
          <li>Projected turnover 2026: USD 200 Million.</li>
        </ul>
      </div>
    </section>
    </div>
  );
};

export default StrengthSection;
