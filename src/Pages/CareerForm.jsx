import Nav from "../components/Navber/Nav";
import SecondNavImg from "../components/SecondNavImg";
import career from '../assets/image/Career.jpeg';

const CareerForm = () => {
  return (
    <div>
        <Nav isVisible={true} />
        <SecondNavImg text="Career" img={career}/>
        <div className="flex flex-col items-center min-h-screen bg-white">
      <div className=" max-w-6xl mt-20 text-3xl">
        <p className="text-gray-700 mb-4 text-2xl">
        <span className="font-bold logo-color">STYLORIUM SOURCING LTD.</span>It has been in the buying house business since 2020. SSL has been recognized internationally as one of the safest and best company to work for.
        </p>
        <ul className="text-gray-700 text-left  text-2xl mb-6">
          <li>•	A positive work environment will help you accomplish your goals and find happiness in your career.</li>
          <li>•	We believe in a work-life balance.</li>
          <li>•	Excellent growth and advancement opportunities.</li>
          <li>•	5 days’ work week.</li>
        </ul>
      </div>
      <div className="bg-white p-6 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center mb-4">Upload Resume</h2>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Full name"
              className="w-full border border-orange-300 bg-orange-100 text-black rounded-md px-4 py-2 text-sm placeholder-black focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-orange-300 bg-orange-100 text-black rounded-md px-4 py-2 text-sm placeholder-black focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone"
              className="w-full border border-orange-300 bg-orange-100 text-black rounded-md px-4 py-2 text-sm placeholder-black focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Which position are you applying for?"
              className="w-full border border-orange-300 bg-orange-100 text-black rounded-md px-4 py-2 text-sm placeholder-black focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Cover letter"
              rows="4"
              className="w-full border border-orange-300 bg-orange-100 text-black rounded-md px-4 py-2 text-sm placeholder-black focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="file"
              className="block w-full text-sm text-gray-500 file:mr-2 file:py-2 file:px-4 file:border-0 file:rounded-md file:bg-orange-300 file:text-black hover:file:bg-orange-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#4C578D] text-white font-semibold rounded-md py-4 text-sm hover:bg-[#344183]"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default CareerForm;
