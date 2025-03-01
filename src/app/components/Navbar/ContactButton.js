import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const ContactButton = () => {
    return (
        <Link href="/contact">
            <button className="relative overflow-hidden text-sm bg-primary text-secondary px-8 py-2 flex items-center gap-2 
                before:absolute before:top-0 before:left-0 before:w-full before:h-full 
                before:bg-gradient-to-b before:from-secondary before:to-secondary  
                before:transition-transform before:duration-300 before:scale-x-0
                hover:before:scale-x-100 hover:text-white before:z-0">
                <span className="relative z-10">Contact Us</span>
                <FaArrowRight className="relative z-10" />
            </button>
        </Link>
    );
};

export default ContactButton;
