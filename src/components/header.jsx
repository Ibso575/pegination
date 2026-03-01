import react from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import Iphone from "../assets/iphone.png";

const Header = () => {
  return (
    <div className="bg-[#f5f5f7] w-full">
      {/* TOP NAV */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <h1 className="text-2xl font-bold tracking-wide cursor-pointer hover:opacity-70 transition">
            QPICK
          </h1>

          {/* Model Select */}
          <div className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-black transition">
            <span className="text-sm">Выбрать модель телефона</span>
            <MdKeyboardArrowDown className="text-lg" />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          {/* Heart */}
          <div className="relative cursor-pointer group">
            <FaHeart className="text-gray-600 text-lg group-hover:text-red-600 transition" />
            <span className="absolute -top-2 -right-2 bg-orange-400 text-white text-[10px] px-1.5 py-[1px] rounded-full">
              2
            </span>
          </div>

          {/* Cart */}
          <div className="relative cursor-pointer group">
            <FaShoppingCart className="text-gray-600 text-lg group-hover:text-green-600 transition" />
            <span className="absolute -top-2 -right-2 bg-orange-400 text-white text-[10px] px-1.5 py-[1px] rounded-full">
              1
            </span>
          </div>
        </div>
      </div>

      {/* BLACK BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
        <div className="bg-black rounded-3xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 py-10 sm:py-14 gap-8">
            {/* TEXT */}
            <div className="text-center lg:text-left">
              <h2
                className="text-white font-semibold leading-tight
                       text-2xl sm:text-3xl lg:text-4xl"
              >
                Аксессуары <br className="hidden sm:block" />
                для <br className="hidden sm:block" />
                Iphone 13 Pro Max
              </h2>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center lg:justify-end w-full lg:w-auto">
              <img
                src={Iphone}
                alt="iphone"
                className="h-28 sm:h-36 lg:h-44 object-contain transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
