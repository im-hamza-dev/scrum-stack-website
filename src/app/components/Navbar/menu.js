const NAV_ITEMS = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#reviews", label: "Our Clients" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

const MenuItems = () => {
    const handleScroll = (e, targetId) => {
        e.preventDefault(); // Prevent default anchor behavior
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
                <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="relative text-[#767676] hover:text-primary transition-colors 
                        before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] 
                        before:bg-primary before:scale-x-0 before:origin-center before:transition-transform 
                        before:duration-300 hover:before:scale-x-100"
                >
                    {item.label}
                </a>
            ))}
        </div>
    );
};

export default MenuItems;
