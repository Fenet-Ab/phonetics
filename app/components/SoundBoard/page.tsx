"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const SoundButton = ({ letter, color, shadowColor, index }: { letter: string, color: string, shadowColor: string, index: number }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handleClick = () => {
        setIsPlaying(true);
        if ('speechSynthesis' in window) {
            // Cancel any ongoing speech to avoid overlap
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(letter);
            utterance.rate = 1;
            utterance.pitch = 1.2;
            window.speechSynthesis.speak(utterance);
        }
        setTimeout(() => setIsPlaying(false), 500);
    };

    return (
        <motion.button
            whileHover={{ scale: 1.15, rotate: (index % 2 === 0 ? 5 : -5) }}
            whileTap={{ scale: 0.9, rotate: 0 }}
            onClick={handleClick}
            className={`w-24 h-24 md:w-32 md:h-32 ${color} rounded-[2.5rem] flex flex-col items-center justify-center text-4xl md:text-6xl font-black text-white shadow-2xl border-b-[10px] ${shadowColor} relative active:border-b-[2px] active:translate-y-[8px] transition-all group`}
        >
            <span className="drop-shadow-[2px_2px_0px_rgba(0,0,0,0.1)]">{letter}</span>
            {isPlaying && (
                <motion.div
                    initial={{ scale: 1, opacity: 0.8 }}
                    animate={{ scale: 2.5, opacity: 0 }}
                    className="absolute inset-0 bg-white rounded-[2.5rem] -z-10"
                />
            )}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 rounded-[2.5rem] transition-opacity pointer-events-none" />
        </motion.button>
    );
};

const SoundBoard = () => {
    const letters = [
        { char: 'A', color: 'bg-[#FF4E4E]', shadow: 'border-[#C62828]' },
        { char: 'B', color: 'bg-[#4CAF50]', shadow: 'border-[#2E7D32]' },
        { char: 'C', color: 'bg-[#FFC107]', shadow: 'border-[#FFA000]' },
        { char: 'D', color: 'bg-[#2196F3]', shadow: 'border-[#1565C0]' },
        { char: 'E', color: 'bg-[#9C27B0]', shadow: 'border-[#7B1FA2]' },
        { char: 'F', color: 'bg-[#FF5722]', shadow: 'border-[#E64A19]' },
        { char: 'G', color: 'bg-[#00BCD4]', shadow: 'border-[#0097A7]' },
        { char: 'H', color: 'bg-[#795548]', shadow: 'border-[#5D4037]' },
    ];

    return (
        <section id="lessons" className="py-32 bg-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF4E95]/5 rounded-full blur-3xl -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[#FF4E95] font-black tracking-widest uppercase text-lg"
                    >
                        Sound Board
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-gray-800 mt-4 tracking-tight"
                    >
                        Click a Letter to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E95] to-[#FF8DC7]">Hear it!</span>
                    </motion.h2>
                    <p className="text-gray-600 font-bold mt-6 text-xl max-w-2xl mx-auto">Try our interactive sound board teaser. Every click is a step towards reading!</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 justify-items-center mb-20">
                    {letters.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20, scale: 0.5 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: index * 0.05, type: "spring" }}
                        >
                            <SoundButton letter={item.char} color={item.color} shadowColor={item.shadow} index={index} />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 flex flex-col items-center space-y-8">
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-6 bg-gray-900 text-white text-2xl font-black rounded-3xl shadow-2xl transition-all flex items-center space-x-4 group"
                    >
                        <span>Unlock All 26 Letters</span>
                        <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </motion.div>
                    </motion.button>
                    <p className="text-gray-400 font-black text-lg">Already have an account? <span className="text-[#FF4E95] cursor-pointer hover:underline">Log in here</span></p>
                </div>
            </div>

            {/* Peeking Popi integration as requested */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, type: "spring" }}
                className="absolute -bottom-10 left-[-2%] w-48 h-48 opacity-40 z-20"
            >
                <motion.div
                    animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-full h-full"
                >
                    <Image src="/popi.png" alt="" fill className="object-contain" />
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, type: "spring" }}
                className="absolute -bottom-10 right-[-2%] w-48 h-48 opacity-40 z-20"
            >
                <motion.div
                    animate={{ y: [0, -10, 0], rotate: [5, -5, 5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="relative w-full h-full"
                >
                    <Image src="/popi.png" alt="" fill className="object-contain" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default SoundBoard;
