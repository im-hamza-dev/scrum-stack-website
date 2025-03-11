import React from "react";
import { FaTwitter, FaFacebookF, FaPinterestP, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-[url('/footerBg.jpg')] bg-cover bg-right bg-no-repeat text-white py-20">
      <div className="absolute inset-0 bg-secondary opacity-90"></div>
      <div className="relative container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold flex items-center">
            <span className="text-primary">Scrum Stack</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Desires to obtain pain of itself, because it is pain, but occasionally circumstances.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition">
              <FaPinterestP size={18} />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="text-xl font-bold border-b-2 border-primary inline-block pb-1">Explore</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-primary">About Company</a></li>
            <li><a href="#" className="hover:text-primary">Meet the Team</a></li>
            <li><a href="#" className="hover:text-primary">News & Media</a></li>
            <li><a href="#" className="hover:text-primary">Our Projects</a></li>
            <li><a href="#" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info & Gallery */}
        <div>
          <h3 className="text-xl font-bold border-b-2 border-primary inline-block pb-1">Contact</h3>
          <p className="mt-4 text-gray-400">66 Road Brooklyn Street, 600 New York, USA</p>
          <div className="mt-4 space-y-2">
            <p className="flex items-center text-gray-400"><FaEnvelope className="mr-2" /> needhelp@company.com</p>
            <p className="flex items-center text-gray-400"><FaPhone className="mr-2" /> +92 666 888 0000</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;