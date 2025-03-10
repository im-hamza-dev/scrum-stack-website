"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import Navbar from "./components/Navbar/navbar";
import Banner from "./components/banner";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import TechManagement from "./components/TechManagement/TechManagement";
import HeroSection from "./components/HeroSection/HeroSection";
import ProjectShowcase from "./components/ProjectShowcase/ProjectShowcase";
import Feedback from "./components/Feedback/Feedback";
import StatsCounter from "./components/StatsCounter/StatsCounter";
import TeamSection from "./components/TeamSection/TeamSection";
import FAQContact from "./components/FAQContact/FAQContact";
import "./globals.css";
import ClientSlideshow from "./components/ClientSlideshow/ClientSlideshow";
 
export default function Home() {

  return (
    <div>
      <Navbar />
      <Banner />
      <ClientSlideshow/>
      <About/>
      <Services/>
      <TechManagement/>
      <HeroSection/>
      <ProjectShowcase/>
      <Feedback/>
      <StatsCounter/>
      <TeamSection/>
      <FAQContact/>
    </div>
  );
}
