"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const SoundButton = ({ letter, color, shadowColor, index }: { letter: string, color: string, shadowColor: string, index: number }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handleClick = () => {
        setIsPlaying(true);
        if ('speechSynthesis' in window) {
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
            whileHover={{ scale: 1.1, rotate: (index % 2 === 0 ? 5 : -5) }}
            whileTap={{ scale: 0.9, rotate: 0 }}
            onClick={handleClick}
            className={`w-32 h-32 md:w-48 md:h-48 ${color} rounded-[3rem] flex flex-col items-center justify-center text-6xl md:text-8xl font-black text-white shadow-2xl border-b-[12px] ${shadowColor} relative active:border-b-[4px] active:translate-y-[8px] transition-all group`}
        >
            <span className="drop-shadow-[4px_4px_0px_rgba(0,0,0,0.1)]">{letter}</span>
            {isPlaying && (
                <motion.div
                    initial={{ scale: 1, opacity: 0.8 }}
                    animate={{ scale: 2, opacity: 0 }}
                    className="absolute inset-0 bg-white rounded-[3rem] -z-10"
                />
            )}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 rounded-[3rem] transition-opacity pointer-events-none" />
        </motion.button>
    );
};

const SoundBoard = () => {
    // Only A, B, and C as requested
    const letters = [
        { char: 'A', color: 'bg-[#FF4E4E]', shadow: 'border-[#C62828]' },
        { char: 'B', color: 'bg-[#4CAF50]', shadow: 'border-[#2E7D32]' },
        { char: 'C', color: 'bg-[#FFC107]', shadow: 'border-[#FFA000]' },
    ];

    return (
        <section id="lessons" className="py-32 bg-slate-50 relative overflow-hidden min-h-[600px] flex items-center">
            {/* Animated Background Shapes */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    x: [0, 50, 0],
                    y: [0, 30, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-20 left-10 w-64 h-64 bg-red-100/50 rounded-full blur-3xl opacity-60"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, -120, 0],
                    x: [0, -70, 0],
                    y: [0, 50, 0]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-20 right-10 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl opacity-60"
            />
            <motion.div
                animate={{
                    y: [0, -100, 0],
                    x: [0, 20, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-50/30 rounded-full blur-[100px]"
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block px-6 py-2 bg-pink-100 text-pink-500 rounded-full text-sm font-black uppercase tracking-widest mb-6"
                    >
                        Foundation Level 1
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-800 tracking-tight leading-none"
                    >
                        ABC <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E95] to-[#FF8DC7]">Adventure!</span>
                    </motion.h2>
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 max-w-2xl mx-auto"
                    >
                        <p className="text-slate-500 font-bold text-xl md:text-2xl leading-relaxed px-4">
                            Start your phonics journey with the sounds of <span className="text-red-500">A</span>, <span className="text-green-500">B</span>, and <span className="text-yellow-500">C</span>.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mt-6 opacity-70">
                            {['Identify', 'Pronounce', 'Confidence'].map((goal, i) => (
                                <span key={i} className="flex items-center space-x-2 text-slate-500 font-bold text-sm uppercase tracking-wider">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>{goal}</span>
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Just the three letters, larger and centered */}
                <div className="flex flex-wrap justify-center gap-12 md:gap-20">
                    {letters.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5, y: 50 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                        >
                            <SoundButton letter={item.char} color={item.color} shadowColor={item.shadow} index={index} />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 flex flex-col items-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-6 bg-slate-900 text-white text-2xl font-black rounded-3xl shadow-2xl flex items-center space-x-4 group"
                    >
                        <span>Unlock 26 Letters</span>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </motion.button>
                </div>
            </div>

            {/* Popi Animations */}
            <motion.div
                initial={{ x: -100, y: 100, rotate: -20, opacity: 0 }}
                whileInView={{ x: 0, y: 0, rotate: 10, opacity: 1 }}
                animate={{
                    y: [0, -20, 0],
                    rotate: [10, 15, 10]
                }}
                transition={{
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    x: { type: "spring", stiffness: 50, damping: 10 },
                    opacity: { duration: 0.5 }
                }}
                className="absolute bottom-4 left-4 w-40 h-40 md:w-56 md:h-56 z-20 pointer-events-none"
            >
                <Image
                    src="/popi.png"
                    alt="Popi Mascot"
                    width={256}
                    height={256}
                    className="object-contain"
                />
            </motion.div>

            <motion.div
                initial={{ x: 100, y: -100, rotate: 20, opacity: 0 }}
                whileInView={{ x: 0, y: 0, rotate: -15, opacity: 1 }}
                animate={{
                    y: [0, 20, 0],
                    rotate: [-15, -10, -15]
                }}
                transition={{
                    y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
                    x: { type: "spring", stiffness: 50, damping: 10 },
                    opacity: { duration: 0.5 }
                }}
                className="absolute top-4 right-4 w-40 h-40 md:w-56 md:h-56 z-20 pointer-events-none"
            >
                <Image
                    src="/popiB.png"
                    alt="Popi Mascot"
                    width={256}
                    height={256}
                    className="object-contain"
                />
            </motion.div>
        </section>
    );
};

export default SoundBoard;
