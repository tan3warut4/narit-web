"use client";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar/Navbar";
import { useRef } from "react";
import SectorCoverage from "./components/SectorCoverage";
import "./styles/App.scss";

export default function Home() {
  const sectionTwoRef = useRef(null);
  return (
    <main className="min-h-screen flex-col items-center justify-between">
      <Navbar sectionTwoRef={sectionTwoRef} />
      <div className="w-full bg-slate-700 h-[700px]">
        <div className="p-24 text-center uppercase">
          <span className="text-white text-3xl ">Hero section</span>
        </div>
      </div>
      <div className="min-h-screen" id="second-section" ref={sectionTwoRef}>
        <div id="about-us">
          <AboutUs />
        </div>
        <div id="sectorCoverage">
          <SectorCoverage />
        </div>
      </div>
    </main>
  );
}
