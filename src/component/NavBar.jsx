import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { LINKS } from '../constants';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    // Toggles the mobile menu open and closed
    const menuTogglebar = () => {
        setToggleMenu(!toggleMenu);
    };

    // Smoothly scrolls to target section and closes menu after clicking a link
    const handleScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });
        }
        setToggleMenu(false); // Close menu after navigation
    };

    return (
        <nav className="fixed top-4 z-50 flex w-full flex-col items-center justify-center">
            <div className="flex w-full items-center justify-between  font-bold text-blue-500 p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg">
                {/* Logo */}
                <img src={logo} alt="logo" width={80} height={22} />

                {/* Desktop Links */}
                <div className="hidden space-x-7 lg:flex">
                    {LINKS.map((link, index) => (
                        <a
                            key={index}
                            href={`#${link.targetId}`}
                            className={`text-sm ${index !== 0 ? 'border-l-2 border-neutral-300/20 pl-20' : ''} hover:opacity-50`}
                            onClick={(e) => handleScroll(e, link.targetId)}
                        >
                            {link.text}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className="lg:hidden text-3xl">
                    <button onClick={menuTogglebar}>
                        {toggleMenu ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Links */}
            {toggleMenu && (
                <div className="w-full backdrop-blur-lg lg:hidden text-white">
                    {LINKS.map((link, index) => (
                        <a
                            key={index}
                            href={`#${link.targetId}`}
                            className="block p-4 uppercase tracking-tighter"
                            onClick={(e) => handleScroll(e, link.targetId)}
                        >
                            {link.text}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default NavBar;
