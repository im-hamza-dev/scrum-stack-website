import Link from "next/link";
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="bg-white flex flex-row  shadow-md">
            <div className="flex flex-row">
                <Link href="/">
                    <Image src="/logo.png" alt="Logo" width={200} height={50} />
                </Link>
                <div className="h-full bg-[#FFAA17] w-3"></div>
            </div>
            <div className="container  mx-auto flex items-center justify-between py-4 px-6">
                {/* Menu Items */}
                <div className="hidden md:flex space-x-8">
                    <Link href="/" className="text-[#929292]  hover:text-blue-600">Home</Link>
                    <Link href="/about" className="text-[#929292] hover:text-blue-600">About</Link>
                    <Link href="/services" className="text-[#929292] hover:text-blue-600">Services</Link>
                    <Link href="/blog" className="text-[#929292] hover:text-blue-600">Blog</Link>
                    <Link href="/contact" className="text-[#929292] hover:text-blue-600">Contact</Link>
                </div>

                {/* Contact Button */}
                <Link href="/contact">
                    <button className="bg-[#FFAA17] text-white font-semibold px-8 py-2 flex items-center gap-2 hover:bg-yellow-600">
                        Contact Us
                        <FaArrowRight />
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
