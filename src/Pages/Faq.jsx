import { useState } from 'react';
import Nav from "../components/Navber/Nav";
import { NavLink } from 'react-router-dom';

const Faq = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  const faqs = [
    { id: 1, question: 'What kind of business organization is SSL?', answer: 'Exporter, Trader, Sourcer & Manufacturer.' },
    { id: 2, question: 'Our detailed product list of SSL?', answer: 'Textile, Footwear, Handicraft, Home textile, Household, Gloves, Bags & Backpack, Toy, Home Textile, Garden Item, Kitchen Item & Jewelry etc. ' },
    { id: 3, question: 'How can I contact SSL?', answer: ' info@stylorium.net/yousuf.sarker@stylorium.net Mobile: +88 01730595698.' },
    { id: 4, question: 'What type of client can approach SSL?', answer: 'Retailer, Wholesaler, Importer & Distributor.' },
    { id: 5, question: 'What is the shipment lead time after the order placement?', answer: 'If it is local material then we take 30-90 Days, OR if is import materials then need 90-120 days.' },
    { id: 6, question: 'What is the payment term?', answer: 'LC, TT, DP, CAD, DAP, CASH.' },
    { id: 7, question: 'What the minimum order quantity (MOQ) per style/color?', answer: '500 pices per color' },
    { id: 8, question: 'Why would you consider SSL as your business partner?', answer: 'For competitive price with on time delivery.' },
    { id: 9, question: 'How do I apply for a job at SSL?', answer: 'by website as well as Email.' },
    { id: 10, question: 'How and what do I Negotiate?', answer: ' By email or Whats app as well as correct payment mode.' },
    { id: 11, question: 'What time will the products be dispatched?', answer: 'Within the 30-120 days.' },
    { id: 12, question: 'Is there any advice that is relevant to all of your buyer?', answer: 'If you are doing business with us your thought will change.' },
  ];

  return (
    <div>
    <Nav isVisible={true} />

    {/* Video Background with Overlay Text */}
    <div className="relative mt-20 w-full h-[40vh]">
      <video
        className="absolute top-0 left-0 object-cover w-full h-full"
        src= "https://res.cloudinary.com/de8yddexc/video/upload/v1737121936/SSL/x5sugywnkafiawux3q1o.mp4"     
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50">
        <h1 className="text-4xl font-bold text-white">FAQ Page</h1>
         <h3 className="mt-5 text-sm text-white md:text-xl">
            <span className="text-orange-300">
              <NavLink to={"/"}>Home</NavLink>
                </span>
                  <span className="mx-3">/</span>
                  <span>faq</span>
          </h3>
      </div>
    </div>

    {/* FAQ Section */}
    <section className="min-h-screen py-10 bg-gray-50">
      <div className="container px-6 mx-auto">
        <div className="pb-6 text-center">
          <h2 className="relative inline-block pb-2 text-3xl font-semibold">
            FAQ
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-1 bg-[#4C578D]"></span>
          </h2>
        </div>
        <div className="max-w-3xl p-6 mx-auto bg-white rounded-lg shadow-lg">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b border-gray-200">
              <button
                className="w-full text-left flex items-center justify-between py-4 px-6 text-gray-700 hover:bg-[#4c578d38] focus:outline-none focus:ring focus:ring-[#4C578D]"
                onClick={() => toggleItem(faq.id)}
                aria-expanded={openItem === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="flex items-center">
                  <span className="bg-[#4C578D] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-4">{faq.id}</span>
                  {faq.question}
                </span>
                <span className="text-lg">{openItem === faq.id ? "-" : "+"}</span>
              </button>
              {openItem === faq.id && (
                <div
                  id={`faq-answer-${faq.id}`}
                  className="px-6 py-4 text-sm text-gray-600 transition-all duration-300 ease-in-out"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
  );
};

export default Faq;
