"use client"
import Image from "next/image";


export default function DetailPageBanner({title,pageLink,bgImage}) {
    return (
      <div className="relative w-full h-96 md:h-80 bg-secondary text-white flex items-center">
        <img
          src={bgImage} // Replace with the actual image path
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative w-full px-6 md:px-12 lg:px-20">
          <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
          <nav className="flex items-center space-x-5 text-sm md:text-base mt-2">
            <a href="/" className="text-primary hover:text-white ">Home</a>
            <span className="text-white font-bold">{'>'}</span>
            <span className="text-primary lowercase hover:text-white"> <a href={pageLink} cursor>/ {title}</a></span>
          </nav>
        </div>
      </div>
    );
  }
  