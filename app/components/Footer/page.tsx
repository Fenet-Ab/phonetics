import React from 'react';

const Footer = () => {
    return (
        <footer className="py-16 bg-white text-center border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-left mb-12">
                <div className="col-span-1">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#FF4E95] to-[#FF8DC7] rounded-xl flex items-center justify-center shadow-lg shadow-pink-100">
                            <div className="w-4 h-4 bg-white rotate-45 rounded-sm" />
                        </div>
                        <span className="text-2xl font-black text-[#FF4E95]">PhonicsFriends</span>
                    </div>
                    <p className="text-gray-500 font-bold leading-relaxed">
                        Making the world of phonics accessible and fun for every child through music and play.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h5 className="font-black text-gray-800 text-lg">Product</h5>
                    <a href="#lessons" className="text-gray-500 font-bold hover:text-[#FF4E95] transition-colors">Lessons</a>
                    <a href="#games" className="text-gray-500 font-bold hover:text-[#FF4E95] transition-colors">Games</a>
                    <a href="#resources" className="text-gray-500 font-bold hover:text-[#FF4E95] transition-colors">Resources</a>
                </div>
                <div className="flex flex-col gap-4">
                    <h5 className="font-black text-gray-800 text-lg">Company</h5>
                    <a href="/about" className="text-gray-500 font-bold hover:text-[#FF4E95] transition-colors">About Us</a>
                    <a href="/contact" className="text-gray-500 font-bold hover:text-[#FF4E95] transition-colors">Contact</a>
                    <a href="/privacy" className="text-gray-500 font-bold hover:text-[#FF4E95] transition-colors">Privacy Policy</a>
                </div>
            </div>
            <div className="pt-8 border-t border-gray-50">
                <p className="text-gray-400 font-bold text-sm">© 2026 PhonicsFriends. Crafted with love for little learners.</p>
            </div>
        </footer>
    );
};

export default Footer;