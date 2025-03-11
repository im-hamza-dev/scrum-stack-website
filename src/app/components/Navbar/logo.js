import Link from "next/link";
import Image from "next/image";

const Logo = ({ width, src, hidebar, position }) => {
  return (
    <div className={`flex ${position}  flex-row align-middle items-center p-3`}>
      <Link href="/">
        <Image src={src} alt="Logo" width={width} height={50} />
      </Link>
    </div>
  );
};

export default Logo;
