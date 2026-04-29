"use client";
import React, { useEffect } from 'react'
import Features from "../components/Features/page";
import Footer from "../components/Footer/page";
import GamesTeaser from "../components/GamesTeaser/page";
import PhonicsHomePage from "../components/Hero/page";
import HowItWorks from "../components/HowItWorks/page";
import SoundBoard from "../components/SoundBoard/page";



const Landing = () => {


    return (
        <>
            <PhonicsHomePage />
            <SoundBoard />
            <Features />
            <GamesTeaser />
            <HowItWorks />
            <Footer />
        </>
    )
}

export default Landing