"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Step = ({ number, title, description, color, isLast }: { number: string, title: string, description: string, color: string, isLast?: boolean }) => (
    <div className="relative flex flex-col items-center flex-1">
        {/* Connector Line (Desktop) */}
        {!isLast && (
            <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-1 border-t-4 border-dashed border-gray-200 -z-0" />
        )}

        <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`w-24 h-24 ${color} rounded-[2rem] flex items-center justify-center text-4xl font-black text-white shadow-2xl z-10 mb-8 transform transition-all cursor-default`}
        >
            {number}
        </motion.div>

        <h3 className="text-2xl font-black text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 font-bold max-w-xs text-center leading-relaxed">
            {description}
        </p>
    </div>
);

const HowItWorks = () => {
    const steps = [
        {
            number: "1",
            title: "Play & Listen",
            description: "Kids listen to catchy songs and watch fun animations for each letter and sound.",
            color: "bg-gradient-to-br from-[#FF4E4E] to-[#FF8A8A]"
        },
        {
            number: "2",
            title: "Practice Together",
            description: "Interactive games help kids recognize shapes and pronounce sounds correctly.",
            color: "bg-gradient-to-br from-[#4CAF50] to-[#81C784]"
        },
        {
            number: "3",
            title: "Master Phonics",
            description: "Through repetition and reward, children build a strong foundation for reading.",
            color: "bg-gradient-to-br from-[#FFC107] to-[#FFD54F]"
        }
    ];

    return (
        <section id="how-it-works" className="py-24 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[#FF4E95] font-black tracking-widest uppercase text-sm"
                    >
                        The Journey
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-gray-800 mt-4"
                    >
                        Three Simple Steps to <span className="text-[#FF4E95]">Success</span>
                    </motion.h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-start relative">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="w-full"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <Step {...step} isLast={index === steps.length - 1} />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mt-24 p-10 bg-white rounded-[3rem] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border-4 border-[#FF4E95]/10"
                >
                    <div className="text-center md:text-left">
                        <h4 className="text-3xl font-black text-gray-800 mb-2">Ready to start the adventure?</h4>
                        <p className="text-gray-600 font-bold">Join over 10,000+ Happy Phonics Friends!</p>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 bg-[#FF4E95] text-white font-black rounded-2xl shadow-lg shadow-pink-200 hover:bg-[#D53F8C] transition-all whitespace-nowrap"
                    >
                        CREATE FREE ACCOUNT
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;
