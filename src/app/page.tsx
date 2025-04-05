'use client'
import { useState } from "react";
import HeroSection from "@/components/home/hero";
import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import Join from "@/components/home/join";
import Services from "@/components/home/services";

export default function Home() {

  return (
    < >

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Join Us */}
      <Join />

      {/* Contact Section */}
      <Contact />
    </>
  );
}
