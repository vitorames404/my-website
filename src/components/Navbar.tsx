import React, { useState } from 'react';

const Navbar = () => {

    const[isMenuOpen, setMenuOpen] = useState(false);

    const openMenu = () => {
        setMenuOpen(!isMenuOpen)
    }

    console.log(isMenuOpen);

    return (
        <nav className="bg-gray-500 p-4">
            <div className="flex items-center justify-between">
                {/* Name / Logo */}
                <div className="text-white text-2xl font-bold"> My Name</div>
                
                <div className="md:hidden">
                    <button className="text-white" onClick={openMenu}>
                        <svg
                        fill='none'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        viewBox='0 0 24 24'
                        className='w-6 h-6'
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                
                <ul className="hidden md:flex space-x-4">
                    <li><a className="text-white">Bio</a></li>
                    <li><a className="text-white">Resumé</a></li>
                    <li><a className="text-white">Portfolio</a></li>
                    <li><a className="text-white">Contact me!</a></li>
                </ul>
            </div>

            {/* Mobile menu */}
            {isMenuOpen ? (
                <ul className="flex-col md:hidden">
                    <li><a className="text-white">Bio</a></li>
                    <li><a className="text-white">Resumé</a></li>
                    <li><a className="text-white">Portfolio</a></li>
                    <li><a className="text-white">Contact me!</a></li>
                </ul>
            ) : null}
        </nav>
    );
};

export default Navbar;
