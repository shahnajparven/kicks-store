import { useState } from "react";
import { IoMdPerson, IoMdSearch, IoMdMenu, IoMdClose } from "react-icons/io";
import logo from "../../assets/logo.png";
import drop from "../../assets/NewDrops.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menOpen, setMenOpen] = useState(false);
  const [womenOpen, setWomenOpen] = useState(false);

  return (
    <div className="w-full p-4 md:p-4 lg:p-8 ">
        
      <div className="w-full h-16 md:h-20 lg:h-24 mx-auto
                      flex items-center justify-between
                      rounded-lg md:rounded-xl lg:rounded-3xl px-8
                      bg-white shadow-md relative">
                         {/* Mobile Menu Button */}
        <div className="md:hidden">
          {mobileOpen ? (
            <IoMdClose size={28} onClick={() => setMobileOpen(false)} />
          ) : (
            <IoMdMenu size={28} onClick={() => setMobileOpen(true)} />
          )}
        </div>

        {/* Left Menu (Desktop) */}
        <div className="hidden md:flex gap-8 text-lg font-medium relative">

         <img src={drop} alt="drop" className="h-18px w-103px object-contain" />
          {/* Men Dropdown */}
          <div className="relative">
            <button
              onClick={() => setMenOpen(!menOpen)}
              className="hover:text-blue-500 text-[#232321] text-[16px] font-bold"
            >
              Men ▾
            </button>

            {menOpen && (
              <div className="absolute top-10 left-0 bg-white shadow-lg rounded-xl p-4 w-40">
                <ul className="space-y-2">
                  <li className="hover:text-blue-500 cursor-pointer">Shirts</li>
                  <li className="hover:text-blue-500 cursor-pointer">Pants</li>
                  <li className="hover:text-blue-500 cursor-pointer">Shoes</li>
                </ul>
              </div>
            )}
          </div>

          {/* Women Dropdown */}
          <div className="relative">
            <button
              onClick={() => setWomenOpen(!womenOpen)}
              className="hover:text-blue-500 text-[#232321] text-[16px] font-bold"
            >
              Women ▾
            </button>

            {womenOpen && (
              <div className="absolute top-10 left-0 bg-white shadow-lg rounded-xl p-4 w-40">
                <ul className="space-y-2">
                  <li className="hover:text-blue-500 cursor-pointer">Dresses</li>
                  <li className="hover:text-blue-500 cursor-pointer">Tops</li>
                  <li className="hover:text-blue-500 cursor-pointer">Bags</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <img src={logo} alt="logo" className="h-5 m:h-6 lg:h-8 w-32 object-contain" />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 md:gap-8">
          <IoMdSearch size={25} className="hidden md:flex cursor-pointer hover:text-blue-500" />
          <IoMdPerson size={25} className="cursor-pointer hover:text-blue-500" />

          <span className="bg-[#FFA52F] text-black text-md w-8 h-8 flex items-center justify-center rounded-full">
            0
          </span>
        </div>

       
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 bg-white shadow-lg rounded-2xl p-6 space-y-4">
          <a href="#" className="block">New Drops</a>

          <div>
            <p className="font-semibold">Men</p>
            <ul className="ml-4 mt-2 space-y-1 text-sm">
              <li>Shirts</li>
              <li>Pants</li>
              <li>Shoes</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">Women</p>
            <ul className="ml-4 mt-2 space-y-1 text-sm">
              <li>Dresses</li>
              <li>Tops</li>
              <li>Bags</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;


