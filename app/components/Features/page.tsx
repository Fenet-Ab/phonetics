"use client";

import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, icon, color }: { title: string, description: string, icon: string, color: string }) => (
    <motion.div
        whileHover={{ y: -10, scale: 1.02 }}
        className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-50 flex flex-col items-center text-center group transition-all"
    >
        <div className={`w-20 h-20 ${color} rounded-2xl flex items-center justify-center mb-6 shadow-inner transform group-hover:rotate-6 transition-transform`}>
            <span className="text-4xl">{icon}</span>
        </div>
        <h3 className="text-2xl font-black text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 font-medium leading-relaxed">
            {description}
        </p>
    </motion.div>
);

const Features = () => {
    const features = [
        {
            title: "Interactive Lessons",
            description: "Engage with animated characters that teach phonics through stories and songs.",
            icon: "📚",
            color: "bg-[#FFEBEE] text-[#FF4E4E]"
        },
        {
            title: "Fun Mini-Games",
            description: "Reinforce learning with games designed to improve recognition and pronunciation.",
            icon: "🎮",
            color: "bg-[#E8F5E9] text-[#4CAF50]"
        },
        {
            title: "Progress Tracking",
            description: "Detailed insights for parents and teachers to see how their little ones are growing.",
            icon: "📈",
            color: "bg-[#FFF8E1] text-[#FFC107]"
        },
        {
            title: "Musical Journey",
            description: "Every sound is a song! Our curriculum is built on the power of melody.",
            icon: "🎵",
            color: "bg-[#F3E5F5] text-[#9C27B0]"
        }
    ];

    return (
        <section id="features" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-pink-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 translate-x-1/3 translate-y-1/3" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[#FF4E95] font-black tracking-widest uppercase text-sm"
                    >
                        Why Choose PhonicsFriends?
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-gray-800 mt-4"
                    >
                        Learning that feels like <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E95] to-[#FF8DC7]">Magic</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <FeatureCard {...feature} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
