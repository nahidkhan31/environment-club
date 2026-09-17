import React from 'react';
import picture from "../../assets/Logo/logo.jpg.jpeg";
import { Link } from "react-router";

const Logo = () => {
    return (
        <div>
            <Link to="/" className="flex items-center gap-3 group no-underline">
                {/* লোগো ইমেজ */}
                <div className="w-18 h-18 overflow-hidden flex items-center justify-center">
                    <img className="w-full h-full object-contain" src={picture} alt="Environment Club Logo" />
                </div>
                
                {/* Environment Club লেখা */}
                <span className="font-bold text-lg md:text-xl text-emerald-800 tracking-wide hover:text-green-900">
                    Environment Club
                </span>
            </Link>
        </div>
    );
};

export default Logo;