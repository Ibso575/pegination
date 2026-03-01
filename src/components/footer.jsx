import {
  FaVk,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
  FaGlobe,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-200 py-10 px-6 md:px-20 rounded-t-[30px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold tracking-widest">QPICK</h1>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex flex-col gap-3 text-gray-700">
            <a
              href="#"
              className="hover:text-black hover:translate-x-1 transition-all duration-300"
            >
              Избранное
            </a>
            <a
              href="#"
              className="hover:text-black hover:translate-x-1 transition-all duration-300"
            >
              Корзина
            </a>
            <a
              href="#"
              className="hover:text-black hover:translate-x-1 transition-all duration-300"
            >
              Контакты
            </a>
          </div>

          <div className="flex flex-col gap-6">
            <a
              href="#"
              className="text-gray-700 hover:text-black hover:translate-x-1 transition-all duration-300"
            >
              Условия сервиса
            </a>

            {/* Languages */}
            <div className="flex items-center gap-4 text-gray-600">
              <FaGlobe />
              <a
                href="#"
                className="hover:text-[#FFA542] font-semibold transition-all duration-300"
              >
                Каз
              </a>
              <a
                href="#"
                className=" font-semibold hover:text-[#FFA542] transition-all duration-300"
              >
                Рус
              </a>
              <a
                href="#"
                className="hover:text-[#FFA542] font-semibold transition-all duration-300"
              >
                Eng
              </a>
            </div>
          </div>
        </div>

        {/* Socials */}
        <div className="flex gap-6 text-xl text-gray-700">
          {[
            {
              icon: <FaVk />,
              link: "https://vk.com/",
              hover: "hover:text-blue-600",
            },
            {
              icon: <FaInstagram />,
              link: "https://instagram.com/",
              hover: "hover:text-pink-500",
            },
            {
              icon: <FaTelegramPlane />,
              link: "https://telegram.org/",
              hover: "hover:text-sky-500",
            },
            {
              icon: <FaWhatsapp />,
              link: "https://whatsapp.com/",
              hover: "hover:text-green-500",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className={`${item.hover} transition-all duration-300`}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
