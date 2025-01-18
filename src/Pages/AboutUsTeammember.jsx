import { useState, useEffect, useRef } from "react";
import menImage from "../assets/image/aboutus/men.png";
import womenImage from "../assets/image/aboutus/women.png";

const testimonials = [
  {
    name: "Yousuf Sarker",
    role: "Managing Director",
    rating: 5,
    text: " ",
    image: menImage,
  },
  {
    name: "Probir Kanti Biswas",
    role: "DGM",
    rating: 5,
    text: " ",
    image: menImage,
  },
  {
    name: "Shakil Miah",
    role: "Merchandiser Team Leader",
    rating: 5,
    text: "“We weave innovation and passion into every product we create.”",
    image: menImage,
  },
  {
    name: "Nasir Uddin",
    role: "QC Team Leader",
    rating: 4,
    text: "“Quality is never an accident; it is always the result of intelligent effort.”",
    image: menImage,
  },
  {
    name: "Jasmin Islam (Navy)",
    role: "Designer",
    rating: 5,
    text: "“Great design happens when talent meets trust and collaboration.”",
    image: womenImage,
  },
  {
    name: "Mst. Hanan Mim",
    role: "Compliance Auditor",
    rating: 5,
    text: " ",
    image: womenImage,
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setTranslateX(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const delta = e.clientX - startX;
    setTranslateX(delta);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      if (translateX > 100) {
        setCurrentIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1
        );
      } else if (translateX < -100) {
        setCurrentIndex((prevIndex) =>
          prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0
        );
      }
      setTranslateX(0);
    }
  };

  return (
    <div
      className="relative w-full max-w-[1200px] mx-auto overflow-hidden py-14"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Handle when the mouse leaves the container
      ref={sliderRef}
    >
      {/* Cards Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(calc(-${currentIndex * 400}px + ${translateX}px))`,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[400px] h-[400px] p-4"
          >
            <div className="bg-white border rounded-lg p-6 text-center h-full flex flex-col justify-between  cursor-pointer">
              <div>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <h3 className="font-bold text-lg">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <div className="flex justify-center my-2">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-sm">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
