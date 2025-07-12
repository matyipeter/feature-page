"use client";
import { useState } from "react";

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-[#f5f5f5] text-gray-900 p-4 shadow-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Left: Logo */}
                <div className="text-xl font-bold tracking-wide">Rentivo</div>

                {/* Center: Navigation Links (hidden on small screens) */}
                <div className="hidden md:flex space-x-8 text-sm font-medium">
                    <a href="/" className="hover:text-gray-600 transition">
                        Termék
                    </a>
                    <a href="#features" className="hover:text-gray-600 transition">
                        Funkciók
                    </a>
                    <a href="#demo" className="hover:text-gray-600 transition">
                        Demo
                    </a>
                    <a href="#help" className="hover:text-gray-600 transition">
                        Támogatás
                    </a>
                    <a href="#contact" className="hover:text-gray-600 transition">
                        Kapcsolat
                    </a>
                </div>

                {/* Right: Login / Sign Up + Hamburger for links */}
                <div className="flex items-center space-x-4">
                    {/*}
                    <a
                        href="#login"
                        className="text-sm border border-gray-400 hover:border-gray-500 px-3 py-1.5 rounded-md transition"
                    >
                        Bejelentkezés
                    </a>
                    <a
                        href="#signup"
                        className="text-sm bg-gray-900 text-white hover:bg-gray-800 px-3 py-1.5 rounded-md transition"
                    >
                        Regisztráció
                    </a>
                    */}

                    

                    {/* Hamburger (only shows on small screens) */}
                    <button
                        className="md:hidden ml-2 text-gray-900 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={
                                    isOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16M4 18h16"
                                }
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Links */}
            {isOpen && (
                <div className="md:hidden mt-4 space-y-3 text-center text-sm font-medium">
                    <a
                        href="/"
                        className="block hover:text-gray-600 transition"
                    >
                        Termék
                    </a>
                    <a
                        href="#features"
                        className="block hover:text-gray-600 transition"
                    >
                        Funkciók
                    </a>
                    <a
                        href="#demo"
                        className="block hover:text-gray-600 transition"
                    >
                        Demo
                    </a>
                    <a
                        href="#help"
                        className="block hover:text-gray-600 transition"
                    >
                        Támogatás
                    </a>
                    <a
                        href="#contact"
                        className="block hover:text-gray-600 transition"
                    >
                        Kapcsolat
                    </a>
                </div>
            )}
        </nav>
    );
}
