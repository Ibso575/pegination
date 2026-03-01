import react from "react"
import { FaHeart, FaShoppingBag, FaBalanceScale } from "react-icons/fa";

const Card = ({ product }) => {
  return (
    <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition duration-500 overflow-hidden group border border-gray-100 relative">

      {/* Top Right Icons */}
      <div className="absolute top-5 right-5 flex gap-3 opacity-70">
        <button className="hover:opacity-100 transition">
          <FaHeart className="text-gray-400 hover:text-red-700 text-lg transition" />
        </button>
        <button className="hover:opacity-100 transition">
          <FaBalanceScale className="text-gray-400 hover:text-blue-700 text-lg transition" />
        </button>
      </div>

      {/* Image */}
      <div className="flex justify-center items-center p-12 bg-white">
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-56 object-contain transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="px-8 pb-8 flex flex-col gap-3">

        {/* Name */}
        <h2 className="text-lg font-semibold text-gray-900 tracking-tight">
          {product.title}
        </h2>

        {/* Subtitle */}
        {product.description && (
          <p className="text-sm text-gray-500">
            {product.description}
          </p>
        )}

        {/* Price */}
        <p className="text-2xl font-semibold text-black mt-2">
          {product.price} $
        </p>

        {/* Bottom Actions */}
        <div className="flex items-center justify-between mt-6">
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition duration-300 flex items-center gap-2">
            <FaShoppingBag className="text-sm" />
            Xarid qilish
          </button>

          <span className="text-xs text-gray-400">
            12 oyga bo‘lib to‘lash
          </span>
        </div>

      </div>
    </div>
  );
};

export default Card;