import Nav from "../components/Navber/Nav";
import SecondNavImg from "../components/SecondNavImg";
import navBgimg from '../assets/image/Strength_Top_Image.jpg'

const StrengthSection = () => {
  return (
    <div>
         <Nav isVisible={true} />
         <SecondNavImg text="Strength" img={navBgimg}/>
        <section className="px-6 py-8 bg-gray-100 md:px-16 lg:px-32">
      <div className="max-w-4xl p-6 mx-auto bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">Strength</h2>
        <p className="mb-6 leading-relaxed text-gray-700">
          Strong sustainable sourcing team for product, factory, fabrics, trims, and accessories, keeping commitment. Strategic office location - easy to go to the production facilities.
        </p>
        <ul className="pl-6 space-y-2 text-gray-700 list-disc">
          <li>Long and proven experience in RMG & Non-RMG sector.</li>
          <li>Own sample section with a well-experienced team.</li>
          <li>We are using CIMA, BCI, and Organic cotton.</li>
          <li>
            Our certificates (ILOO, BSCI, SEDEX, ACCORD, RSC, ISO, REX, OEKO-TEX standard 100, and FSC certified).
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
