import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };

    const removeActive = () => {
        setIsActive(false);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`px-4 flex justify-between items-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-[#F0F8FF] text-black'} lg:gap-10`}>
            {/* Logo */}
            <Link to="/home" className={`text-2xl font-bold lg:text-4xl ${darkMode ? 'text-white' : 'text-black'}`}>Dev.</Link>
            
            {/* Menu links */}
            <div className={`${isActive ? 'block' : 'hidden'} w-full lg:flex flex-row lg:gap-10 justify-center px-4 py-4 transition-all duration-700`}>
                <div onClick={removeActive} className={`hover:bg-blue-300 hover:scale-125 transform-gpu px-4 py-1 ${darkMode ? 'text-white' : 'text-black'}`}>
                    <Link to="/home" className="text-xl font-medium">Home</Link>
                </div>
                <div onClick={removeActive} className={`hover:bg-blue-300 hover:scale-125 transform-gpu px-4 py-1 ${darkMode ? 'text-white' : 'text-black'}`}>
                    <Link to="/about" className="text-xl font-medium">About</Link>
                </div>
                <div onClick={removeActive} className={`hover:bg-blue-300 hover:scale-125 transform-gpu px-4 py-1 ${darkMode ? 'text-white' : 'text-black'}`}>
                    <Link to="/products" className="text-xl font-medium">Products</Link>
                </div>
                <div onClick={removeActive} className={`hover:bg-blue-300 hover:scale-125 transform-gpu px-4 py-1 ${darkMode ? 'text-white' : 'text-black'}`}>
                    <Link to="/contact" className="text-xl font-medium">Contact</Link>
                </div>
            </div>
            
            {/* Toggle button for mobile */}
            <div className={`lg:hidden cursor-pointer`} onClick={toggleActiveClass}>
                <span className={`bg-black w-10 h-1 block mb-1 transition duration-300 transform ${isActive ? 'opacity-0' : ''}`}></span>
                <span className={`bg-black w-10 h-1 block mb-1 transition duration-300 transform ${isActive ? 'translate-y-8 rotate-90' : ''}`}></span>
                <span className={`bg-black w-10 h-1 block mb-1 transition duration-300 transform ${isActive ? '-translate-y-8 -rotate-90' : ''}`}></span>
            </div>
            
            {/* Dark mode toggle button */}
            <button
                onClick={toggleDarkMode}
                className={`relative inline-flex items-center rounded-full p-1 ${darkMode ? 'bg-gray-600' : 'bg-yellow-400'}`}
            >
                <span className={`h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${darkMode ? 'translate-x-5' : ''}`}></span>
                <span className={`sr-only`}>{darkMode ? 'Enable light mode' : 'Enable dark mode'}</span>
            </button>
        </div>
    );
}

export default Navbar;
