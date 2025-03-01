import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./logo";
import MenuItems from "./menu";
import Button from "../Button";
import SlideMenu from "./SlideMenu";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <nav className="bg-white flex flex-row shadow-md">
            {/* Logo Section */}
            <Logo />

            {/* Navigation and Button */}
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <MenuItems />
                </div>

                {/* Contact Button */}
                <div className="hidden md:block">
                    <Button href="" text="GET SOLUTION" py="4" px="8" />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 ml-auto pr-4"
                    onClick={() => setMenuOpen(true)}
                >
                    <FaBars />
                </button>

            </div>

            {/* Mobile Menu */}

            <SlideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

        </nav>
    );
};

export default Navbar;
