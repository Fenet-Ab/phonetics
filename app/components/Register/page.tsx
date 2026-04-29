"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        age_group: 5,
        user_name: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSuccess(true);
        }, 2000);
    };

    const ageGroups = [
        { label: '3-5', value: 3, icon: '🐣' },
        { label: '6-8', value: 6, icon: '🦁' },
        { label: '9-12', value: 9, icon: '🐲' },
    ];

    return (
        <div className="min-h-screen bg-[#F0F7FF] flex items-center justify-center p-4 pt-24 pb-8 relative overflow-hidden font-sans">
            {/* Background Decorations */}
            <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-yellow-200 rounded-full blur-[100px] opacity-50" />
            <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-blue-200 rounded-full blur-[100px] opacity-50" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="w-full max-w-xl bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-6 md:p-10 relative z-10 border-4 border-[#EEF2F6]"
            >
                {/* Popi Welcoming - Moved to side to save vertical space */}
                <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-16 -right-12 w-24 h-24 md:w-32 md:h-32 hidden sm:block"
                >
                    <Image src="/popi.png" alt="Popi" width={128} height={128} className="object-contain" />
                </motion.div>

                <div className="text-center mb-6">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-800 mb-2 tracking-tight">
                        Join the <span className="text-[#FF4E95]">Phonics Family!</span>
                    </h1>
                    <p className="text-slate-500 font-bold text-sm">Start your adventure today.</p>
                </div>

                {!success ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Name Input */}
                            <div className="space-y-1">
                                <label className="block text-slate-700 font-black text-[10px] uppercase tracking-wider ml-4">Super Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Your name"
                                    className="w-full px-5 py-3 bg-[#F8FAFC] border-2 border-transparent focus:border-[#FFBDD9] rounded-xl outline-none text-base font-bold text-slate-700 transition-all placeholder:text-slate-300"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            {/* Nickname Input */}
                            <div className="space-y-1">
                                <label className="block text-slate-700 font-black text-[10px] uppercase tracking-wider ml-4">Hero Tag</label>
                                <input
                                    type="text"
                                    placeholder="Nickname"
                                    className="w-full px-5 py-3 bg-[#F8FAFC] border-2 border-transparent focus:border-[#BDE0FF] rounded-xl outline-none text-base font-bold text-slate-700 transition-all placeholder:text-slate-300"
                                    value={formData.user_name}
                                    onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Email Input */}
                        <div className="space-y-1">
                            <label className="block text-slate-700 font-black text-[10px] uppercase tracking-wider ml-4">Grown-up's Email</label>
                            <input
                                type="email"
                                required
                                placeholder="mom@example.com"
                                className="w-full px-5 py-3 bg-[#F8FAFC] border-2 border-transparent focus:border-[#C1FFD7] rounded-xl outline-none text-base font-bold text-slate-700 transition-all placeholder:text-slate-300"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        {/* Age Group Selector - More compact layout */}
                        <div className="space-y-2 text-center">
                            <label className="text-slate-700 font-black text-[10px] uppercase tracking-wider">How old are you?</label>
                            <div className="flex justify-between gap-3 px-4">
                                {ageGroups.map((group) => (
                                    <button
                                        key={group.value}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, age_group: group.value })}
                                        className={`flex-1 p-3 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-1 group ${formData.age_group === group.value
                                            ? 'bg-[#FF4E95] border-[#FF4E95] text-white shadow-md'
                                            : 'bg-[#F8FAFC] border-transparent text-slate-400 hover:border-slate-200'
                                            }`}
                                    >
                                        <span className="text-2xl">{group.icon}</span>
                                        <span className="font-black text-sm">{group.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="space-y-1">
                            <label className="block text-slate-700 font-black text-[10px] uppercase tracking-wider ml-4">Secret Password</label>
                            <input
                                type="password"
                                required
                                minLength={8}
                                placeholder="8+ letters"
                                className="w-full px-5 py-3 bg-[#F8FAFC] border-2 border-transparent focus:border-[#FFEDBD] rounded-xl outline-none text-base font-bold text-slate-700 transition-all placeholder:text-slate-300"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            disabled={isSubmitting}
                            type="submit"
                            className="w-full py-4 bg-slate-900 text-white rounded-2xl text-xl font-black shadow-xl hover:shadow-[#FF4E9544] transition-all relative overflow-hidden group disabled:opacity-70 mt-2"
                        >
                            <span className="relative z-10">
                                {isSubmitting ? 'Creating...' : "Let's Go! 🚀"}
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF4E95] to-[#FF8DC7] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.button>

                        <div className="text-center mt-4">
                            <p className="text-slate-400 font-bold text-xs">
                                Account exists?{' '}
                                <Link href="/login" className="text-[#FF4E95] hover:underline">
                                    Log In here!
                                </Link>
                            </p>
                        </div>
                    </form>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-10"
                    >
                        <div className="text-6xl mb-6">🎉</div>
                        <h2 className="text-3xl font-black text-slate-800 mb-2">Welcome!</h2>
                        <p className="text-slate-500 font-bold text-base mb-8">Adventure awaits!</p>
                        <button
                            onClick={() => window.location.href = '/'}
                            className="px-10 py-4 bg-slate-900 text-white rounded-2xl text-xl font-black shadow-xl"
                        >
                            Start Now
                        </button>
                    </motion.div>
                )}
            </motion.div>

            {/* Bottom Mascots */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="absolute bottom-10 left-10 w-24 h-24 hidden lg:block"
            >
                <Image src="/popiB.png" alt="Popi" width={100} height={100} className="object-contain" />
            </motion.div>
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="absolute bottom-10 right-10 w-24 h-24 hidden lg:block"
            >
                <Image src="/popiC.png" alt="Popi" width={100} height={100} className="object-contain" />
            </motion.div>
        </div>
    );
};

export default Register;