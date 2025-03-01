"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MdSearch, MdAccountCircle } from 'react-icons/md';
import { IoNotificationsOutline } from 'react-icons/io5';
import Link from 'next/link';
import Navbar from "./components/navbar";
import Banner from "./components/banner";

export default function Home() {

  return (
    <div>
      <Navbar />
      <Banner />
    </div>
  );
}
