import { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';
import CommonNav from './CommonNav';
import headerimg from '../../assets/image/fontImage/headerImage.JPG';

// eslint-disable-next-line react/prop-types
const TopNavbar = ({ isVisible }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`top-0 left-0 w-full p-4 z-50 transition-opacity duration-300 ${
        isVisible ? 'fixed bg-white text-gray-800 shadow-md navbar-slide-down' : 'hidden'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to={'/'}>
          <div>
            <img className="w-10 h-10 md:w-16 md:h-14 ml-10 md:ml-16" src={headerimg} alt="Logo" />
            <p className="text-[8px] md:text-sm italic pt-1 font-bold">100% Export Oriented Company</p>
          </div>
        </NavLink>

        {/* Menu Icon */}
        <div className="md:hidden">
          <CiMenuFries
            size={24}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="cursor-pointer"
          />
        </div>

        {/* Static Navigation Links */}
        <ul className={`md:flex space-x-6 hidden md:block ${isMobileMenuOpen ? 'block' : 'hidden'} md:block text-gray-800`}>
        <CommonNav/>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="flex flex-col items-start bg-white p-4 space-y-2 text-gray-800 md:hidden">
         <CommonNav/>
        </ul>
      )}
    </nav>
  );
};

export default TopNavbar;
