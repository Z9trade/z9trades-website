'use client'
import { useState } from "react";
import HeroSection from "@/components/home/hero";
import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import HeaderSection from "@/components/home/header";
import Join from "@/components/home/join";
import Footer from "@/components/home/footer";
import Services from "@/components/home/services";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <div >
      {/* Header Section */}
      <HeaderSection />

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

      {/* Footer */}
      <Footer />
    </div>
  );
}
