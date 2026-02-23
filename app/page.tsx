"use client";

import React, { useEffect } from "react";
import Features from "./components/Features/page";
import Footer from "./components/Footer/page";
import GamesTeaser from "./components/GamesTeaser/page";
import PhonicsHomePage from "./components/Hero/page";
import HowItWorks from "./components/HowItWorks/page";
import SoundBoard from "./components/SoundBoard/page";

export default function Home() {
  useEffect(() => {
    // Web Speech API for the "Phonics" sound on start
    const speak = () => {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance("Phonics");
        utterance.rate = 0.8; // Slightly slower for clarity
        utterance.pitch = 1.2; // Friendly high pitch for kids
        window.speechSynthesis.speak(utterance);
      }
    };

    // Browsers often block sound until the first interaction.
    // This attempt runs on mount, and we also add a one-time click listener
    // to ensure it plays as soon as the user starts interacting if it was blocked.
    speak();

    const playOnFirstInteraction = () => {
      speak();
      window.removeEventListener('click', playOnFirstInteraction);
    };

    window.addEventListener('click', playOnFirstInteraction);

    return () => {
      window.removeEventListener('click', playOnFirstInteraction);
    };
  }, []);

  return (
    <>
      <PhonicsHomePage />
      <SoundBoard />
      <Features />
      <GamesTeaser />
      <HowItWorks />
      <Footer />
    </>
  );
}
