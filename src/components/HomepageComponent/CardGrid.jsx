import img1 from '../../assets/image/bgImage/image.JPG';
import img2 from '../../assets/image/bgImage/image1.JPG';
import img3 from '../../assets/image/bgImage/image2.JPG';
import img4 from '../../assets/image/bgImage/image3.JPG';
import img5 from '../../assets/image/bgImage/image4.JPG';
import img6 from '../../assets/image/bgImage/image5.JPG';
import img7 from '../../assets/image/bgImage/image6.JPG';
import img8 from '../../assets/image/bgImage/image7.JPG';
import img9 from '../../assets/image/bgImage/image8.JPG';
const CardGrid = () => {
  const cards = [
    { id: 1, name: 'Long History', description: 'Stylorium Sourcing attains many features which are unique in the export industry and contribute heavily on the success incl. the implementation of the latest ERP software.', imgSrc: img1 },
    { id: 2, name: 'Strong CSR Team', description: 'We have a very talented CSR team who ensure Social Compliance as per local & customer CSR demands. Stylorium also has a digital platform for CSR from where customers can get exact factory information regarding any CSR issues.', imgSrc: img2 },
    { id: 3, name: 'Own Design', description: 'Our design team presents new trends which are currently demanded. Samples of our designs are given to our customers. To support upcoming trends.', imgSrc: img3 },
    { id: 4, name: 'Skilled Technical Team', description: 'Our team provides the customer with utmost quality and gives support throughout the whole process, from sampling until the shipment.', imgSrc: img4 },
    { id: 5, name: 'Special QA Team', description: 'To ensure quality, Stylorium has A highly trained Quality Assurance Team who ensure 100% quality as per customer standard.', imgSrc: img5 },
    { id: 6, name: 'Skilled Technical Team', description: 'Our team provides the customer with utmost quality and gives support throughout the whole process, from sampling until the shipment.', imgSrc: img6 },
    { id: 7, name: 'Own Design', description: 'Focusing on key functionalities, Card 7 delivers specific benefits that make it a valuable choice for users.', imgSrc: img7 },
    { id: 8, name: 'Skilled Technical Team', description: 'Our team provides the customer with utmost quality and gives support throughout the whole process, from sampling until the shipment.', imgSrc: img8 },
    { id: 9, name: 'Skilled Technical Team', description: 'Our team provides the customer with utmost quality and gives support throughout the whole process, from sampling until the shipment.', imgSrc: img9 },
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
