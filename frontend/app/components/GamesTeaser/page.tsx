"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const GameCard = ({ title, icon, color, delay }: { title: string, icon: string, color: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay, type: "spring" }}
        whileHover={{ y: -15, rotate: 2, scale: 1.05 }}
        className={`relative p-8 rounded-[3rem] ${color} shadow-2xl cursor-pointer group overflow-hidden`}
    >
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-150 transition-transform">
            <span className="text-8xl">{icon}</span>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-5xl mb-6 shadow-inner">
                {icon}
            </div>
            <h3 className="text-2xl font-black text-white mb-4">{title}</h3>
            <button className="px-6 py-2 bg-white text-gray-800 font-bold rounded-xl shadow-lg hover:scale-110 transition-transform">
                Play Demo
            </button>
        </div>
    </motion.div>
);

const GamesTeaser = () => {
    const games = [
        { title: "Sound Matcher", icon: "🎈", color: "bg-gradient-to-br from-[#FF6B6B] to-[#FF8E8E]", delay: 0.1 },
        { title: "Word Jumper", icon: "🐸", color: "bg-gradient-to-br from-[#51CF66] to-[#69DB7C]", delay: 0.2 },
        { title: "Phonics Rocket", icon: "🚀", color: "bg-gradient-to-br from-[#339AF0] to-[#4DABF7]", delay: 0.3 },
        { title: "Hidden Letters", icon: "🔍", color: "bg-gradient-to-br from-[#FCC419] to-[#FFD43B]", delay: 0.4 },
    ];

    return (
        <section id="games" className="py-24 bg-[#FFFBEB] relative overflow-hidden">
            {/* Background Decorations */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] border-[20px] border-pink-100 rounded-full opacity-50"
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                    <div className="text-left max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[#FF4E95] font-black tracking-widest uppercase text-sm"
                        >
                            Game Center
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-black text-gray-800 mt-4 leading-tight"
                        >
                            Play Your Way to <br />
                            <span className="text-[#FF4E95]">Reading Success!</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-4 rounded-3xl shadow-xl border-4 border-[#FF4E95]/10 flex items-center space-x-4"
                    >
                        <div className="w-16 h-16 bg-[#FF4E95] rounded-2xl flex items-center justify-center text-3xl font-black text-white shadow-lg">
                            +12
                        </div>
                        <div>
                            <p className="font-extrabold text-gray-800 text-xl">New Games</p>
                            <p className="text-gray-500 font-bold">Added this month!</p>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {games.map((game, index) => (
                        <GameCard key={index} {...game} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="relative bg-gradient-to-r from-[#7C3AED] to-[#9333EA] p-12 rounded-[4rem] text-center overflow-hidden"
                >
                    <div className="absolute top-0 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2" />
                    <div className="absolute bottom-0 left-10 w-48 h-48 bg-purple-400/20 rounded-full blur-2xl translate-y-1/2" />

                    <h3 className="text-3xl md:text-5xl font-black text-white relative z-10 mb-8 leading-tight">
                        Unlock the Full Playground Experience
                    </h3>
                    <p className="text-purple-100 font-bold text-xl mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed">
                        Join PhonicsFriends Premium to get unlimited access to 50+ educational games, personalized learning paths, and progress tracking.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 py-5 bg-white text-[#7C3AED] text-2xl font-black rounded-2xl shadow-2xl hover:bg-gray-50 transition-all flex items-center space-x-3"
                        >
                            <span>GO PREMIUM</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </motion.button>
                        <p className="text-white font-black text-2xl">Only $4.99/mo</p>
                    </div>

                    {/* Peeking Popi again! */}
                    <div className="absolute -bottom-10 right-0 w-40 h-40 opacity-30 invert">
                        <Image src="/popi.png" alt="" fill className="object-contain" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GamesTeaser;
