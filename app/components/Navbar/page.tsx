"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'How it Works', href: '#how-it-works' },
        { name: 'Features', href: '#features' },
        { name: 'Lessons', href: '#lessons' },
        { name: 'Games', href: '#games' },
    ];

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
            <div className="bg-white/90 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl px-6 md:px-10 py-3">
                <div className="flex justify-between items-center h-14">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center space-x-3 group min-w-max">
                        <motion.div
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            className="w-10 h-10 bg-gradient-to-br from-[#FF4E95] to-[#FF8DC7] rounded-xl flex items-center justify-center shadow-lg shadow-pink-200"
                        >
                            <div className="w-4 h-4 bg-white rotate-45 rounded-sm" />
                        </motion.div>
                        <span className="text-xl md:text-2xl font-black text-[#FF4E95] tracking-tight font-outfit">
                            Phonics
                        </span>
                    </Link>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 hover:text-[#FF4E95] font-bold transition-colors text-[16px] relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#FF4E95] rounded-full transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Right Section: Auth & CTA */}
                    <div className="flex items-center space-x-4 md:space-x-8">
                        <Link
                            href="/login"
                            className="hidden sm:block text-gray-800 font-bold hover:text-[#FF4E95] transition-colors text-[16px]"
                        >
                            Log In
                        </Link>
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-[#FF4E95] to-[#FF8DC7] text-white px-6 md:px-8 py-3 rounded-xl font-black shadow-lg shadow-pink-100 transition-all text-[14px] md:text-[16px] whitespace-nowrap"
                        >
                            TRY FOR FREE
                        </motion.button>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 focus:outline-none"
                        >
                            <div className={`w-6 h-1 bg-[#FF4E95] rounded-full transition-all ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                            <div className={`w-6 h-1 bg-[#FF4E95] rounded-full transition-all ${isOpen ? 'opacity-0' : ''}`} />
                            <div className={`w-6 h-1 bg-[#FF4E95] rounded-full transition-all ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 flex flex-col space-y-4"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-700 font-black text-xl hover:text-[#FF4E95] transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4 border-t border-gray-50 flex flex-col space-y-4">
                            <Link
                                href="/login"
                                onClick={() => setIsOpen(false)}
                                className="text-gray-800 font-black text-xl"
                            >
                                Log In
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;