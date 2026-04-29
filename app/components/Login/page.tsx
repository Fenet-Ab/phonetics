"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            window.location.href = '/';
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-[#F0F7FF] flex items-center justify-center p-4 pt-24 pb-8 relative overflow-hidden font-sans">
            {/* Background Decorations */}
            <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-pink-100 rounded-full blur-[100px] opacity-50" />
            <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 bg-yellow-100 rounded-full blur-[100px] opacity-50" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="w-full max-w-xl bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-6 md:p-10 relative z-10 border-4 border-[#EEF2F6] min-h-[600px] flex flex-col justify-center"
            >
                {/* Popi Welcoming */}
                <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-16 left-1/2 -translate-x-1/2 w-24 h-24 md:w-32 md:h-32"
                >
                    <Image src="/popiC.png" alt="Popi" width={128} height={128} className="object-contain" />
                </motion.div>

                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-800 mb-2 tracking-tight">
                        Welcome <span className="text-[#4CAF50]">Back!</span>
                    </h1>
                    <p className="text-slate-500 font-bold text-sm">Adventure awaits inside.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email Input */}
                    <div className="space-y-1">
                        <label className="block text-slate-700 font-black text-[10px] uppercase tracking-wider ml-4">Grown-up's Email</label>
                        <input
                            type="email"
                            required
                            placeholder="mom@example.com"
                            className="w-full px-5 py-3 bg-[#F8FAFC] border-2 border-transparent focus:border-[#4CAF50] rounded-xl outline-none text-base font-bold text-slate-700 transition-all placeholder:text-slate-300"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    {/* Password Input */}
                    <div className="space-y-1">
                        <label className="block text-slate-700 font-black text-[10px] uppercase tracking-wider ml-4">Secret Password</label>
                        <input
                            type="password"
                            required
                            placeholder="Your secret key"
                            className="w-full px-5 py-3 bg-[#F8FAFC] border-2 border-transparent focus:border-[#4CAF50] rounded-xl outline-none text-base font-bold text-slate-700 transition-all placeholder:text-slate-300"
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
                        className="w-full py-4 bg-slate-900 text-white rounded-2xl text-xl font-black shadow-xl hover:shadow-[#4CAF5044] transition-all relative overflow-hidden group disabled:opacity-70"
                    >
                        <span className="relative z-10">
                            {isSubmitting ? 'Opening...' : "Sign In! 🗝️"}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#4CAF50] to-[#81C784] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>

                    <div className="text-center mt-4">
                        <p className="text-slate-400 font-bold text-xs">
                            New explorer?{' '}
                            <Link href="/register" className="text-[#4CAF50] hover:underline">
                                Join us here!
                            </Link>
                        </p>
                    </div>
                </form>
            </motion.div>

            {/* Mascot */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="absolute bottom-10 right-10 w-24 h-24 hidden lg:block"
            >
                <Image src="/popi.png" alt="Popi" width={100} height={100} className="object-contain" />
            </motion.div>
        </div>
    );
};

export default Login;
