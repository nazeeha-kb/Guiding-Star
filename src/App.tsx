/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AuthorityStrip } from './components/AuthorityStrip';
import { About } from './components/About';
import { Offerings } from './components/Offerings';
import { WhoIWorkWith } from './components/WhoIWorkWith';
import { Credentials } from './components/Credentials';
import { Testimonials } from './components/Testimonials';
import { EngagementThemes } from './components/EngagementThemes';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { DiscoveryModal } from './components/DiscoveryModal';

export default function App() {
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsDiscoveryOpen(true);
  };

  const handleCloseBooking = () => {
    setIsDiscoveryOpen(false);
  };

  const handleBeginJourney = () => {
    setIsDiscoveryOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#183238] font-sans selection:bg-[#5797A6]/20 selection:text-[#183238]">
      {/* Top Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="grow">
        {/* 1. Hero Section */}
        <Hero onBeginJourney={handleBeginJourney} />

        {/* 2. Authority Metrics Strip */}
        <AuthorityStrip />

        {/* 3. About Section */}
        <About />

        {/* 4. Core Practice Areas ("What we can work on") */}
        <Offerings onOpenBooking={handleOpenBooking} />

        {/* 5. Who I Work With ("Different seasons. Different questions.") */}
        <WhoIWorkWith onOpenBooking={handleOpenBooking} />

        {/* 6. Professional Credentials & Accreditations */}
        <Credentials />

        {/* 7. Dedicated Testimonials Carousel Section */}
        <Testimonials />

        {/* 8. What People Come Here to Work Through */}
        <EngagementThemes onOpenBooking={handleOpenBooking} />

        {/* 9. Contact Section (Direct phone, WhatsApp, socials, and note) */}
        <Contact />
      </main>

      {/* Footer with Logo & Channels */}
      <Footer />

      {/* Booking / Discovery Consultation Modal */}
      <DiscoveryModal isOpen={isDiscoveryOpen} onClose={handleCloseBooking} />
    </div>
  );
}
