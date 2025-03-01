import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <div className="flex flex-row">
            <Link href="/">
                <Image src="/logo.png" alt="Logo" width={200} height={50} />
            </Link>
            <div className="h-full bg-[#FFAA17] w-3"></div>
        </div>
    );
};

export default Logo;
