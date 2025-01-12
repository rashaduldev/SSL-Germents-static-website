import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SecondNavImg = ({ img, text }) => {
  return (
    <div
      className="h-96 relative mt-24 md:mt-[111px]"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="container mx-auto relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white uppercase">
          <h1 className="text-4xl md:text-7xl">{text}</h1>
          <h3 className="mt-5 text-sm md:text-xl">
            <span className="text-orange-300">
              <NavLink to={"/"}>Home</NavLink>
            </span>
            <span className="mx-3">/</span>
            <span>{text}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SecondNavImg;
