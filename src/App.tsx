/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { WhoIWorkWith } from "./components/WhoIWorkWith";
import { Approach } from "./components/Approach";
import { AuthorityStrip } from "./components/AuthorityStrip";
import { Offerings } from "./components/Offerings";
import { Credentials } from "./components/Credentials";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { DiscoveryModal } from "./components/DiscoveryModal";
import { RevealOnScroll } from "./components/RevealOnScroll";

export default function App() {
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsDiscoveryOpen(true);
  };

  const handleCloseBooking = () => {
    setIsDiscoveryOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink font-sans">
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="grow">
        <Hero onBeginJourney={handleOpenBooking} />

        <RevealOnScroll>
          <AuthorityStrip />
        </RevealOnScroll>
        
        <RevealOnScroll>
          <About onOpenBooking={handleOpenBooking} />
        </RevealOnScroll>

        <RevealOnScroll>
          <WhoIWorkWith onOpenBooking={handleOpenBooking} />
        </RevealOnScroll>

        <RevealOnScroll>
          <Approach />
        </RevealOnScroll>

        <RevealOnScroll>
          <Offerings onOpenBooking={handleOpenBooking} />
        </RevealOnScroll>

        <RevealOnScroll>
          <Credentials />
        </RevealOnScroll>

        <RevealOnScroll>
          <Testimonials />
        </RevealOnScroll>

        <RevealOnScroll>
          <Faq />
        </RevealOnScroll>

        <RevealOnScroll>
          <Contact onOpenBooking={handleOpenBooking} />
        </RevealOnScroll>
      </main>

      <Footer />
      <DiscoveryModal isOpen={isDiscoveryOpen} onClose={handleCloseBooking} />
    </div>
  );
}
