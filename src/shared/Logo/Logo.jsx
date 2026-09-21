import React from 'react';
import picture from "../../../src/assets/Logo/logo.jpeg";
import { Link } from "react-router";

const Logo = () => {
    return (
        <div>
            <Link to="/" className="flex items-center gap-3 group no-underline">
                {/* লোগো ইমেজ */}
                <div className="w-14 h-14 overflow-hidden flex items-center justify-center">
                    <img className="w-full h-full object-contain" src={picture} alt="Environment Club Logo" />
                </div>
                
                {/* দুই লাইনে ক্লাব নাম */}
                <div className="flex flex-col justify-center leading-tight">
                    <span className="font-bold text-sm md:text-base text-emerald-900 tracking-wide group-hover:text-emerald-700 transition-colors">
                        DScE Environment
                    </span>
                    <span className="font-extrabold text-base md:text-lg text-emerald-700 tracking-wider">
                        Club
                    </span>
                </div>
            </Link>
        </div>
    );
};

export default Logo;