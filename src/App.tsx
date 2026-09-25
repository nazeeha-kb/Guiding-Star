/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { AuthorityStrip } from "./components/AuthorityStrip";
import { Offerings } from "./components/Offerings";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { DiscoveryModal } from "./components/DiscoveryModal";

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
        <Offerings onOpenBooking={handleOpenBooking} />
        <AuthorityStrip />
        <About onOpenBooking={handleOpenBooking} />
        <Testimonials/>
        <Contact onOpenBooking={handleOpenBooking} />
      </main>

      <Footer />
      <DiscoveryModal isOpen={isDiscoveryOpen} onClose={handleCloseBooking} />
    </div>
  );
}
