import Highly from '../../assets/image/bgImage/9image/Highly.jpg';
import Long from '../../assets/image/bgImage/9image/Long.jpg';
import Material from '../../assets/image/bgImage/9image/Material.jpg';
import Own from '../../assets/image/bgImage/9image/Own.jpg';
import Real from '../../assets/image/bgImage/9image/Real.jpg';
import SkilledFabric from '../../assets/image/bgImage/9image/Skilled-Fabric-Team.jpg';
import Skilled from '../../assets/image/bgImage/9image/Skilled.jpg';
import Special from '../../assets/image/bgImage/9image/Special.jpg';
import Strong from '../../assets/image/bgImage/9image/Strong.jpg';
const CardGrid = () => {
  const cards = [
    { id: 1, name: 'Long History', description: 'Stylorium Sourcing attains many features which are unique in the export industry and contribute heavily on the success incl. the implementation of the latest ERP software.', imgSrc: Long },
    { id: 2, name: 'Strong CSR Team', description: 'We have a very talented CSR team who ensure Social Compliance as per local & customer CSR demands. Stylorium also has a digital platform for CSR from where customers can get exact factory information regarding any CSR issues.', imgSrc: Strong },
    { id: 3, name: 'Own Design', description: 'Our design team presents new trends which are currently demanded. Samples of our designs are given to our customers. To support upcoming trends.', imgSrc: Own },
    { id: 4, name: 'Material Sourcing', description: 'Stylorium Sourcing Ltd. has an own sourcing in India, China & Pakistan which supports customers through import fabric & trims.', imgSrc: Material },
    { id: 5, name: 'Real Order Update', description: 'Stylorium Sourcing Ltd. follow latest technology is being used by buyer own portal where customers can get real-time order updates.', imgSrc: Real },
    { id: 6, name: 'Highly Skilled Merchandising Team', description: 'Stylorium Sourcing Ltd. has specialists and experts in the textile & non textile merchandising team for different products and categories. Through the diversified team, customers can expect proper product support.', imgSrc: Highly },
    { id: 7, name: 'Special QA Team', description: 'To ensure quality, SSL has A highly trained Quality Assurance Team who ensure 100% quality as per customer standard', imgSrc: Special },
    { id: 8, name: 'Skilled Technical Team', description: 'Our team provides the customer with utmost quality and gives support throughout the whole process, from sampling until the shipment.', imgSrc: Skilled },
    { id: 9, name: 'Skilled Fabric Team', description: 'Our expert Chinese technician ensures superior fabric quality, maintaining the highest standards of excellence in every detail.', imgSrc: SkilledFabric },
  ];

  return (
    <div className="container mx-auto my-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-0">
        {cards.map((card) => (
          <div key={card.id} className="flex flex-col items-center text-center p-4">
            <div className="relative group w-56 h-56 rounded-full overflow-hidden">
              <img
                src={card.imgSrc}
                alt={card.name}
                className="hover-img w-full h-full object-cover transition-opacity duration-[1000ms] ease-in-out opacity-100 group-hover:opacity-0"
              />
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-[1500ms] ease-in-out">
                <h3 className="text-white font-bold text-xl">{card.name}</h3>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-bold text-2xl mb-3">{card.name}</h3>
              <p className="text-gray-500 font-bold">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
