"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Import other sections to centralize them in this component as requested
import SoundBoard from "../SoundBoard/page";
import Features from "../Features/page";
import GamesTeaser from "../GamesTeaser/page";
import HowItWorks from "../HowItWorks/page";
import Footer from "../Footer/page";

const MusicalNote = ({ delay, x, y, rotate }: { delay: number, x: string, y: string, rotate: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.5],
            y: ["0px", "-100px"],
            rotate: [rotate, rotate + 20]
        }}
        transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
        }}
        style={{ left: x, top: y }}
        className="absolute z-20 pointer-events-none"
    >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-gray-800/40">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
    </motion.div>
);

const HeartCloud = ({ delay, x, y, scale = 1 }: { delay: number, x: string, y: string, scale?: number }) => (
    <motion.div
        animate={{
            x: ["0px", "20px", "0px"],
            y: ["0px", "-10px", "0px"]
        }}
        transition={{ duration: 6, delay, repeat: Infinity, ease: "easeInOut" }}
        style={{ left: x, top: y, scale }}
        className="absolute z-10 opacity-60 pointer-events-none"
    >
        <svg width="120" height="100" viewBox="0 0 120 100" fill="white">
            <path d="M60 90C60 90 20 65 20 35C20 15 40 15 50 25C55 30 60 40 60 40C60 40 65 30 70 25C80 15 100 15 100 35C100 65 60 90 60 90Z" />
            <circle cx="40" cy="40" r="25" />
            <circle cx="80" cy="40" r="25" />
            <circle cx="60" cy="30" r="20" />
        </svg>
    </motion.div>
);

const PopiCharacter = ({
    src,
    delay,
    rotateDir = 1,
    size = "w-48 h-48 md:w-64 md:h-64"
}: {
    src: string,
    delay: number,
    rotateDir?: number,
    size?: string
}) => {
    const [duration, setDuration] = React.useState(4.5);

    React.useEffect(() => {
        setDuration(4 + Math.random());
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0, y: 100, rotate: rotateDir * 45 }}
            whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 1,
                delay,
                type: "spring",
                stiffness: 120,
                damping: 12,
                mass: 1
            }}
            className="relative flex flex-col items-center"
        >
            <motion.div
                animate={{
                    rotate: [rotateDir * -3, rotateDir * 3, rotateDir * -3],
                    y: [0, -20, 0],
                    scale: [1, 1.05, 1]
                }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay + 0.5
                }}
                className={`${size} relative z-10 drop-shadow-[0_30px_30px_rgba(0,0,0,0.15)]`}
            >
                <Image src={src} alt="Popi Character" fill className="object-contain" priority />
            </motion.div>
        </motion.div>
    );
};

const Tree = ({ x, color }: { x: string, color: string }) => (
    <div style={{ left: x }} className="absolute bottom-32 flex flex-col items-center">
        <div className={`w-8 h-12 ${color} rounded-t-full shadow-inner`} />
        <div className="w-1.5 h-4 bg-amber-900 rounded-sm" />
    </div>
);

const House = ({ x, roofColor }: { x: string, roofColor: string }) => (
    <div style={{ left: x }} className="absolute bottom-32 flex flex-col items-center group cursor-pointer transition-transform hover:scale-110">
        <div className={`w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[20px] ${roofColor}`} />
        <div className="w-10 h-10 bg-white shadow-md flex items-center justify-center relative">
            <div className="w-3 h-4 bg-amber-100 rounded-t-sm" />
            <div className="absolute top-1 left-2 w-2 h-2 bg-blue-50" />
            <div className="absolute top-1 right-2 w-2 h-2 bg-blue-50" />
        </div>
    </div>
);

export default function PhonicsHomePage() {
    const [notes, setNotes] = React.useState<{ x: string, y: string, rotate: number }[]>([]);

    React.useEffect(() => {
        const newNotes = [...Array(8)].map(() => ({
            x: `${15 + Math.random() * 70}%`,
            y: `${15 + Math.random() * 30}%`,
            rotate: Math.random() * 360
        }));
        setNotes(newNotes);
    }, []);

    return (
        <div className="overflow-x-hidden">
            <main className="min-h-screen bg-gradient-to-b from-[#87CEEB] via-[#B0E2FF] to-[#E0F4FF] overflow-hidden relative flex flex-col items-center pt-32 md:pt-48 pb-20">

                {/* 1. Sky Decoration */}
                <HeartCloud delay={0} x="10%" y="10%" scale={0.8} />
                <HeartCloud delay={1} x="75%" y="5%" scale={1.2} />
                <HeartCloud delay={2} x="45%" y="15%" scale={0.6} />

                {/* 2. Musical Notes */}
                {notes.map((note, i) => (
                    <MusicalNote
                        key={i}
                        delay={i * 0.8}
                        x={note.x}
                        y={note.y}
                        rotate={note.rotate}
                    />
                ))}

                {/* 3. Landscape Layer */}
                <div className="absolute bottom-0 w-full h-[450px] pointer-events-none">
                    {/* Hills */}
                    <div className="absolute bottom-0 w-full h-[300px] bg-[#90EE90] rounded-[100%] scale-x-150 translate-y-32 shadow-2xl shadow-green-900/20" />
                    <div className="absolute bottom-0 w-full h-[350px] bg-[#7CDE7C] rounded-[100%] scale-x-125 translate-y-40" />

                    {/* Trees & Houses */}
                    <House x="8%" roofColor="border-b-red-400" />
                    <Tree x="18%" color="bg-green-500" />
                    <House x="30%" roofColor="border-b-purple-400" />
                    <Tree x="40%" color="bg-emerald-500" />
                    <House x="60%" roofColor="border-b-blue-400" />
                    <Tree x="70%" color="bg-green-600" />
                    <House x="85%" roofColor="border-b-orange-400" />

                    {/* Bottom Corner Monsters - Full Body & Prominent */}
                    <div className="absolute bottom-5 left-[-2%] z-40 pointer-events-auto">
                        <PopiCharacter src="/im.png" delay={1.2} rotateDir={-1} size="w-24 h-24 md:w-32 md:h-32 lg:w-[180px] lg:h-[180px]" />
                    </div>
                    <div className="absolute bottom-5 right-[-2%] z-40 pointer-events-auto">
                        <PopiCharacter src="/popiE.png" delay={1.5} rotateDir={1} size="w-24 h-24 md:w-32 md:h-32 lg:w-[180px] lg:h-[180px]" />
                    </div>
                </div>

                {/* 4. Central Hero Content */}
                <div className="relative z-30 flex flex-col items-center gap-16 w-full max-w-7xl px-4">

                    {/* Main Popi Row */}
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 lg:gap-24 w-full">
                        <PopiCharacter src="/popi.png" delay={0.2} rotateDir={-1} />
                        <PopiCharacter src="/image.png" delay={0.5} rotateDir={0.5} />
                        <PopiCharacter src="/image2.png" delay={0.8} rotateDir={1} />
                    </div>

                    <Link href="/register">
                        <motion.button
                            whileHover={{ scale: 1.05, rotate: 1, boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-16 py-7 bg-gradient-to-r from-[#FF4E95] to-[#FF8DC7] text-white text-4xl md:text-5xl font-black rounded-[2.5rem] border-b-[14px] border-[#D81B60] shadow-2xl hover:brightness-110 active:border-b-[4px] active:translate-y-[10px] transition-all"
                        >
                            Start NOW!
                        </motion.button>
                    </Link>
                </div>

            </main>

            {/* Appended sections as requested */}

        </div>
    );
}