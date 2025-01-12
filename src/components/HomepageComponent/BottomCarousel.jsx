import { useRef, useState, useEffect } from 'react';
import vedio1 from '../../assets/video/Why_choose_SSL_new.mp4';
import value1 from '../../assets/image/fontImage/Valus1.png';
import value2 from '../../assets/image/fontImage/Valus2.png';
import value3 from '../../assets/image/fontImage/Valus3.png';
import value4 from '../../assets/image/fontImage/Valus4.png';
import value5 from '../../assets/image/fontImage/Valus5.jpg';
import value6 from '../../assets/image/fontImage/Valus6.jpg';
import value7 from '../../assets/image/fontImage/Valus7.jpg';
import value8 from '../../assets/image/fontImage/Valus8.jpg';
import value9 from '../../assets/image/fontImage/Valus9.jpg';
import value10 from '../../assets/image/fontImage/Valus10.png';
import value11 from '../../assets/image/fontImage/Valus11.jpg';
import value12 from '../../assets/image/fontImage/Valus12.jpg';
import value13 from '../../assets/image/fontImage/Valus13.jpg';

const BottomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const autoplayInterval = useRef(null);

  const cards = [
    { id: 1, label: 'Global Organic Textile Standard', imgSrc: value1 },
    { id: 2, label: 'WRAP', imgSrc: value2 },
    { id: 3, label: 'Responsible Forestry Certified', imgSrc: value3 },
    { id: 4, label: 'Global Recycled Standard', imgSrc: value4 },
    { id: 5, label: 'Card 5', imgSrc: value5 },
    { id: 6, label: 'Card 6', imgSrc: value6 },
    { id: 7, label: 'Card 7', imgSrc: value7 },
    { id: 8, label: 'Card 8', imgSrc: value8 },
    { id: 9, label: 'Card 9', imgSrc: value9 },
    { id: 10, label: 'Card 10', imgSrc: value10 },
    { id: 11, label: 'Card 11', imgSrc: value11 },
    { id: 12, label: 'Card 12', imgSrc: value12 },
    { id: 13, label: 'Card 13', imgSrc: value13 },
  ];

  const cardsToShow = 4;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < cards.length - (cardsToShow - 1) ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? cards.length - cardsToShow : prevIndex - 1
    );
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    clearInterval(autoplayInterval.current); // Pause autoplay on drag
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const moveOffset = e.clientX - startX;
      setDragOffset(moveOffset);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (dragOffset > 50) {
      prevSlide();
    } else if (dragOffset < -50) {
      nextSlide();
    }
    setDragOffset(0);
    startAutoplay(); // Resume autoplay after drag
  };

  const startAutoplay = () => {
    autoplayInterval.current = setInterval(nextSlide, 2000); // Change slides every 3 seconds
  };

  const stopAutoplay = () => {
    clearInterval(autoplayInterval.current);
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay(); // Cleanup on component unmount
  }, []);

  return (
    <div className="relative h-[610px] my-8">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={vedio1}
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black opacity-30" />
      <div className="flex justify-center items-center h-full relative z-10">
        <button
          onClick={prevSlide}
          className="absolute left-2 top-[60%] transform -translate-y-1/2 text-white text-5xl z-10"
        >
          &lt;
        </button>
        <div
          className="relative w-full overflow-hidden"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseEnter={stopAutoplay} // Pause autoplay on hover
        >
          <h1 className="text-5xl text-[#5164ce] bg-[#bdbdbdf5] p-5 w-[36%] md:w-[12%] container mx-auto text-center mb-10 rounded-lg">
            Value
          </h1>
          <div
            className="flex transition-transform duration-300 ease-in-out gap-5 cursor-pointer"
            style={{
              transform: `translateX(calc(-${currentIndex * (100 / cardsToShow)}% + ${dragOffset}px))`,
            }}
          >
            {cards.map((card) => (
              <div key={card.id} className="w-1/2 md:w-1/6 p-2 flex-shrink-0">
                <div className="w-full h-[350px] rounded-md flex justify-center items-center transform transition-transform duration-300 delay-2000 hover:scale-105 hover:delay-0">
                  <img
                    src={card.imgSrc}
                    alt={card.label}
                    className="w-[200px] h-[13rem] rounded-md border"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-[60%] transform -translate-y-1/2 text-white text-5xl z-10"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default BottomCarousel;
