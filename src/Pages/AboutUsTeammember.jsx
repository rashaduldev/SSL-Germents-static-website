import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Matt Brandon",
    role: "Freelancer",
    rating: 5,
    text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "John Larson",
    role: "Entrepreneur",
    rating: 5,
    text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Saul Goodman",
    role: "CEO & Founder",
    rating: 5,
    text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Sara Wilsson",
    role: "Designer",
    rating: 4,
    text: "Amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jena Karlis",
    role: "Store Owner",
    rating: 5,
    text: "Enim minim velit minim dolor duis veniam ipsum anim magna sunt elit.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Walter White",
    role: "Chemist",
    rating: 5,
    text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Tony Stark",
    role: "Engineer",
    rating: 5,
    text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam.",
    image: "https://via.placeholder.com/150",
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

      {/* Navigation Dots */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
        {Array.from({ length: testimonials.length }, (_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
