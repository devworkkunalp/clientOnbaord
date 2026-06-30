import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Board from './components/Board';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Team from './components/Team';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.15 }
    );

    // Find and observe reveal elements
    const elementsToReveal = document.querySelectorAll('.reveal, .skill-card');
    elementsToReveal.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount
    return () => {
      elementsToReveal.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <main>
        <Board />
        <Timeline />
        <Skills />
        <Team />
        <CTA onOpenModal={() => setIsModalOpen(true)} />
      </main>
      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default App;
