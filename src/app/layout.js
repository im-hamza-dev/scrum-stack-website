"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; 
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer/Footer";




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       
      >
      {<Navbar/>}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
