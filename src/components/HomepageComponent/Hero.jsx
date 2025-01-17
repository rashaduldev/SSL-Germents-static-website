import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import img1 from '../../assets/image/fontImage/Top_Banner_Certification/Certificate1.png';
import img2 from '../../assets/image/fontImage/Top_Banner_Certification/Certificate10.png';
import img3 from '../../assets/image/fontImage/Top_Banner_Certification/Certificate11.png';
import img4 from '../../assets/image/fontImage/Top_Banner_Certification/Certificate2.png';
import img5 from '../../assets/image/fontImage/Top_Banner_Certification/Certificate3.png';
import img6 from '../../assets/image/fontImage/Top_Banner_Certification/Certificate4.png';
import img7 from '../../assets/image/fontImage/Top_Banner_Certification/Certificate5.png';
import img8 from '../../assets/image/fontImage/Top_Banner_Certification/Certificate6.png';
import img9 from '../../assets/image/fontImage/Top_Banner_Certification/Certificate7.png';
import img10 from '../../assets/image/fontImage/Top_Banner_Certification/Certificate8.png';
import img11 from '../../assets/image/fontImage/Top_Banner_Certification/Certificate9.png';

const Hero = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const [playCount, setPlayCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleVideoEnded = () => {
    setPlayCount((prevCount) => prevCount + 1);
  };

  return (
    <section className="relative h-[80vh] overflow-hidden">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
        playing
        loop
        width="100%"
        height="100%"
        className="absolute w-full h-full object-cover"
        onEnded={handleVideoEnded}
      />

      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-center">
        <div>
          <div className="header-test text-3xl md:text-7xl leading-[60px] md:leading-[125px] mt-5">
            <h1>Stylorium Sourcing Ltd</h1>
          </div>
          <p className="text-white md:text-lg text-sm w-[80%] mx-auto">
            Stylorium Sourcing is a 100% export-oriented trader, exporter,
            importer & manufacturer integrated in high-value textile & non-textile products. The company started its journey in 2020 and
            established its WAY TOWARDS SUSTAINABILITY vision in 2030. The corporate office is located in Dhaka, Bangladesh.
          </p>
        </div>
      </div>

      <div className="absolute bottom-2 right-0 md:w-60 md:h-32 w-40 h-20 p-0">
        <img src={images[currentImage]} alt="Partner" className="w-full h-full object-cover transition-transform duration-500" />
      </div>

      {playCount >= 5 && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white">
          <p>The video has played 5 times.</p>
        </div>
      )}
    </section>
  );
};

export default Hero;
