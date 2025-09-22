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
        <button className="flex items-center gap-1 text-gray-800 hover:text-blue-600">
          OUR COMPANY
          <IoIosArrowDown className="text-lg" />
        </button>
        {/* Dropdown Menu for OUR COMPANY */}
        <ul className="absolute left-0 hidden w-40 p-2 mt-0 space-y-2 text-gray-800 bg-white rounded-lg shadow-md group-hover:block">
        <li className="w-full p-2 border-b border-gray-800">
            <NavLink
              to="/our-company/aboutus"
              className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
              }
            >
              ABOUT US
            </NavLink>
          </li>
          <li className="w-full p-2 uppercase border-b border-gray-800">
            <NavLink
              to="/our-company/mission"
              className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
              }
            >
              Mission
            </NavLink>
          </li>
          <li className="w-full p-2 border-b border-gray-800">
            <NavLink
              to="/our-company/strength"
              className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
              }
            >
              STRENGTH
            </NavLink>
          </li>
          <li className="w-full p-2 uppercase border-b border-gray-800">
            <NavLink
              to="/our-company/compliance"
              className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
              }
            >
             Compliance
            </NavLink>
          </li>
          <li className="w-full p-2 uppercase border-b border-gray-800">
            <NavLink
              to="/our-company/goal"
              className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
              }
            >
              Company goal
            </NavLink>
          </li>
          <li className="w-full p-2 uppercase border-b border-gray-800">
            <NavLink
              to="/our-company/organogram"
              className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : "text-gray-800 hover:text-blue-600"
              }
            >
              Organogram
            </NavLink>
          </li>
          <li className="w-full p-2 text-xl border-b border-gray-800">
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
  <button className="flex items-center gap-1 text-gray-800 hover:text-blue-600">
    PRODUCT GALLERY
    <IoIosArrowDown className="text-lg" />
  </button>
  {/* Dropdown Menu for PRODUCT GALLERY */}
  <div className="absolute -left-64 md:-left-[350px] mt-0 hidden group-hover:flex justify-center bg-white pt-5 w-[800px] md:w-[830px] h-[100vh] md:h-[70vh] shadow-md rounded-lg z-50 pl-0 overflow-y-auto">
    <ul className="flex items-start justify-between gap-3 px-0 py-4 text-black md:gap-20">
      {/* Women Category with Subitems */}
      <li className="relative w-full group">
        <button className="text-black hover:text-blue-600 flex items-center text-[12px] md:text-[16px] gap-1 font-bold">
          Women
        </button>
        <ul className="absolute left-0 top-full bg-white rounded-lg md:space-y-2 md:w-[125px] hidden group-hover:block">
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/women/tops'}>Tops</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/women/pant'}>Jeans</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/women/paddedjacket'}>Padded Jacket</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/women/footware'}>Footware</NavLink>
          </li>
        </ul>
      </li>

      {/* Men Category with Subitems */}
      <li className="relative w-full group">
        <button className="text-black hover:text-blue-600 flex items-center text-[12px] md:text-[16px] md:gap-2 font-bold">
          Men
          <span className="text-white">.</span>
        </button>
        <ul className="absolute left-0 top-full bg-white rounded-lg md:space-y-2 md:w-[110px] hidden group-hover:block">
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/men/tshirt'}>T-shirt</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/men/poloshirt'}>Polo Shirt</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/men/sweatshirt'}>Sweat Shirt</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/men/hoodie'}>Hoodie</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/men/jacket'}>Jacket</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/men/paddedjacket'}>Padded Jacket</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/men/pullover'}>Pull Over</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/men/shorts'}>Shorts</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/men/shirt'}>shirt</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/men/sweater'}>Sweater</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/men/longpant'}>Long Pant</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/men/underwear'}>Underwear</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/men/footware'}>Footware</NavLink>
          </li>
        </ul>
      </li>

      {/* Kids Category with Subitems */}
      <li className="relative w-full group">
        <button className="text-black hover:text-blue-600 text-[12px] md:text-[16px] flex items-center md:gap-1 font-bold">
          Kids
        </button>
        <ul className="absolute left-0 top-full rounded-lg md:space-y-2 md:w-[100px] hidden group-hover:block">
          <li className="hover:bg-gray-100 hover:text-blue-600 md:p-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/kids/sweatshirt'}>Sweat Shirt</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:p-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/kids/hoodie'}>Hoodie</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/kids/shorts'}>Shorts</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black capitalize">
            <NavLink to={'/gallery/kids/footware'}>Footware</NavLink>
          </li>
        </ul>
      </li>

      {/* Fashion Accessories */}
      <li className="relative w-full group">
        <button className="text-black hover:text-blue-600 text-[12px] md:text-[16px] flex items-center md:gap-1 font-bold">
        Fashion
        </button>
        <ul className="absolute left-0 top-full min-w-[102px] rounded-lg md:space-y-2 md:w-[100px] hidden group-hover:block">
          <li className="hover:bg-gray-100 hover:text-blue-600 md:p-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/fashion/jewelry'}>Jewelry
            </NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:p-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/fashion/cap'}>Cap
            </NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/fashion/gloves'}>Gloves</NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/fashion/hat'}>Hat
            </NavLink>
          </li>      <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/fashion/bag'}>Bag
            </NavLink>
          </li>       <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/fashion/luggage'}>Luggage
            </NavLink>
          </li> 
        </ul>
      </li>

      {/* Home Textile */}
      <li className="relative w-full group">
        <button className="text-black hover:text-blue-600 text-[12px] md:text-[15px] flex items-center md:gap-1 font-bold -mx-8">
        Home Textile
        </button>
        <ul className="absolute left-0 top-full  rounded-lg md:space-y-2 md:w-[100px] hidden group-hover:block min-w-32 -ml-5">
          <li className="hover:bg-gray-100 hover:text-blue-600 md:p-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/hometextile/bedcover'}>Bed Cover
            </NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:p-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/hometextile/cushioncover'}>Cushion Cover
            </NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/hometextile/potholderorovenmitt'}>potholderorovenmitt

            </NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/hometextile/beachtowel'}>Beach Towel

            </NavLink>
          </li><li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/hometextile/kitchentowel'}>Kitchen Towel

            </NavLink>
          </li><li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/hometextile/kitchenapron'}>Kitchen Apron
            </NavLink>
          </li><li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/hometextile/curtain'}>Curtain
            </NavLink>
          </li><li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/hometextile/tablecloth'}>Table Cloth

            </NavLink>
          </li>
        </ul>
      </li>

      {/* Non Textile */}
      <li className="relative ml-5 group min-w-32">
        <button className="text-black hover:text-blue-600 text-[12px] md:text-[16px] flex items-center md:gap-1 font-bold ">
        Non Textile
        </button>
        <ul className="absolute left-0 top-full rounded-lg md:space-y-2 md:w-[100px] hidden group-hover:block min-w-32">
          <li className="hover:bg-gray-100 hover:text-blue-600 md:p-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/nontextile/basket'}>Basket
            </NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:p-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/nontextile/placemat'}>Place Mat
            </NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/nontextile/coaster'}>Coaster
            </NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/nontextile/rug'}>Rug
            </NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/nontextile/doormat'}>Doormat
            </NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/nontextile/straw&plasticbasket'}>Straw & Plastic Basket
            </NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/nontextile/recyleplastic&paper'}>Recycle Plastic & Paper
            </NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/nontextile/tablerunner'}>Table Runner
            </NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/nontextile/coconutshell'}>Coconut Shell
            </NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/nontextile/woodenitem'}>Wooden Item
            </NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/nontextile/betelnutshell'}>Betel Nut Shell
            </NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/nontextile/stationery'}>Stationery
            </NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/nontextile/crockery'}>Crockery
            </NavLink>
          </li>
          <li className="hover:bg-gray-100 hover:text-blue-600 md:py-2 border-b text-[12px] md:text-[16px] border-black">
            <NavLink to={'/gallery/nontextile/toy'}>Toy
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