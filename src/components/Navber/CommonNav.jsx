import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";

const CommonNav = () => {

  return (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
          }
        >
          HOME
        </NavLink>
      </li>
      <li className="relative group">
        <button className="text-gray-800 hover:text-blue-600 flex items-center gap-1">
          OUR COMPANY
          <IoIosArrowDown className="text-lg" />
        </button>
        {/* Dropdown Menu for OUR COMPANY */}
        <ul className="absolute left-0 mt-0 bg-white shadow-md rounded-lg p-2 space-y-2 text-gray-800 hidden group-hover:block w-40">
          <li className="border-b border-gray-800 w-full p-2 uppercase">
            <NavLink
              to="/our-company/mission"
              className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
              }
            >
              Mission
            </NavLink>
          </li>
          <li className="border-b border-gray-800 w-full p-2 uppercase">
            <NavLink
              to="/our-company/organogram"
              className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
              }
            >
              Organogram
            </NavLink>
          </li>
          <li className="border-b border-gray-800 w-full p-2 uppercase">
            <NavLink
              to="/our-company/goal"
              className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
              }
            >
              Company goal
            </NavLink>
          </li>
          <li className="border-b border-gray-800 w-full p-2 uppercase">
            <NavLink
              to="/our-company/compliance"
              className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
              }
            >
             Compliance
            </NavLink>
          </li>
          <li className="border-b border-gray-800 w-full p-2">
            <NavLink
              to="/our-company/strength"
              className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
              }
            >
              STRENGTH
            </NavLink>
          </li>
          <li className="border-b border-gray-800 w-full p-2">
            <NavLink
              to="/our-company/aboutus"
              className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
              }
            >
              ABOUT US
            </NavLink>
          </li>
          <li className="border-b border-gray-800 w-full p-2 text-xl">
            <NavLink
              to="/our-company/md"
              className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
              }
            >
              Managing Director
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink
          to="/ourservices"
          className={({ isActive }) =>
            isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
          }
        >
          OUR SERVICES
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/quality"
          className={({ isActive }) =>
            isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
          }
        >
          QUALITY
        </NavLink>
      </li>
      
      <li className="relative group">
  <button className="text-gray-800 hover:text-blue-600 flex items-center gap-1">
    PRODUCT GALLERY
    <IoIosArrowDown className="text-lg" />
  </button>
  {/* Dropdown Menu for PRODUCT GALLERY */}
  <div className="absolute -left-64 md:-left-[350px] mt-0 hidden group-hover:flex justify-center bg-white pt-5 w-[800px] md:w-[820px] h-[490px] shadow-md rounded-lg z-50 pl-0">
    <ul className="flex justify-between items-start gap-3 md:gap-20 px-0 py-4 text-black">
      {/* Women Category with Subitems */}
      <li className="relative group w-full">
        <button className="text-black hover:text-blue-600 flex items-center text-[12px] md:text-[16px] gap-1 font-bold">
          WOMEN
        </button>
        <ul className="absolute left-0 top-full bg-white rounded-lg md:space-y-2 md:w-[125px] hidden group-hover:block">
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/women/tops'}>TOPS</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/women/jens'}>Jens</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/women/nightware'}>Night ware</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/women/footware'}>Foot ware</NavLink>
          </li>
        </ul>
      </li>

      {/* Men Category with Subitems */}
      <li className="relative group w-full">
        <button className="text-black hover:text-blue-600 flex items-center text-[12px] md:text-[16px] md:gap-2 font-bold">
          MEN
          <span className="text-white">.</span>
        </button>
        <ul className="absolute left-0 top-full bg-white rounded-lg md:space-y-2 md:w-[110px] hidden group-hover:block">
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/men/tops'}>Tops</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/men/jackets'}>Jackets</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/men/nightware'}>Night ware</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/men/footware'}>Foot ware</NavLink>
          </li>
        </ul>
      </li>

      {/* Kids Category with Subitems */}
      <li className="relative group w-full">
        <button className="text-black hover:text-blue-600 text-[12px] md:text-[16px] flex items-center md:gap-1 font-bold">
          KIDS
        </button>
        <ul className="absolute left-0 top-full rounded-lg md:space-y-2 md:w-[100px] hidden group-hover:block">
          <li className="hover:bg-gray-100 hover:text-blue-600 md:p-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/kids/tops'}>Tops</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:p-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/kids/jackets'}>Jackets</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/kids/underware'}>Under ware</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black capitalize">
            <NavLink to={'/gallery/kids/footware'}>Foot ware</NavLink>
          </li>
        </ul>
      </li>

      {/* Fashion Accessories */}
      <li className="relative group w-full">
        <button className="text-black hover:text-blue-600 text-[12px] md:text-[16px] flex items-center md:gap-1 font-bold">
        Fashion
        </button>
        <ul className="absolute left-0 top-full min-w-[102px] rounded-lg md:space-y-2 md:w-[100px] hidden group-hover:block">
          <li className="hover:bg-gray-100 hover:text-blue-600 md:p-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/kids/tops'}>Jewelry
            </NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:p-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/kids/jackets'}>Cap
            </NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/kids/underware'}>Gloves</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/kids/footware'}>Bag pack
            </NavLink>
          </li>       <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/kids/footware'}>Kitchen Apron

            </NavLink>
          </li>       <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/kids/footware'}>Bag
            </NavLink>
          </li>       <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/kids/footware'}>Luggage
            </NavLink>
          </li> 
        </ul>
      </li>

      {/* Home Textile */}
      <li className="relative group w-full">
        <button className="text-black hover:text-blue-600 text-[12px] md:text-[16px] flex items-center md:gap-1 font-bold -mx-8">
        Home Textile
        </button>
        <ul className="absolute left-0 top-full  rounded-lg md:space-y-2 md:w-[100px] hidden group-hover:block min-w-32 -ml-5">
          <li className="hover:bg-gray-100 hover:text-blue-600 md:p-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/kids/tops'}>Bed Cover
            </NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:p-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/kids/jackets'}>Cushion Cover
            </NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/kids/underware'}>Pillow Cover

            </NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/kids/footware'}>Beach Towel

            </NavLink>
          </li><li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/kids/footware'}>Kitchen Towel

            </NavLink>
          </li><li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/kids/footware'}>Place Mat

            </NavLink>
          </li><li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/kids/footware'}>Table Runner

            </NavLink>
          </li><li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/kids/footware'}>Table Cloth

            </NavLink>
          </li>
        </ul>
      </li>

      {/* Non Textile */}
      <li className="relative group min-w-32 ml-5">
        <button className="text-black hover:text-blue-600 text-[12px] md:text-[16px] flex items-center md:gap-1 font-bold ">
        Non Textile
        </button>
        <ul className="absolute left-0 top-full rounded-lg md:space-y-2 md:w-[100px] hidden group-hover:block min-w-32">
          <li className="hover:bg-gray-100 hover:text-blue-600 md:p-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/kids/tops'}>Handy crafts
            </NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:p-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/kids/jackets'}>Coconut shell
            </NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/kids/underware'}>Wooden Item
            </NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/kids/footware'}>Household Item
            </NavLink>
          </li>
        </ul>
      </li>
    </ul>
  </div>
      </li>

      <li>
    <NavLink
    to="/contact"
    className={({ isActive }) =>
        isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
    }
    >
    CONTACT
    </NavLink>
    </li>
    <li>
    <NavLink
    to="/career"
    className={({ isActive }) =>
        isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
    }
    >
      CAREER
    </NavLink>
    </li>
    <li>
    <NavLink
    to="/faq"
    className={({ isActive }) =>
        isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
    }
    >
    FAQ
    </NavLink>
    </li>
    </>
  );
};

export default CommonNav;


