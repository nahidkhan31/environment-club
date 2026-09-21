import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaFacebookF } from 'react-icons/fa';

const TeamCard = ({ member }) => {
    return (
        <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden max-w-xs w-full">
            {/* Top Light-Green Avatar Header with subtle zoom on hover */}
            <div className="bg-gradient-to-b from-[#e6f4ee] to-[#f0f7f4] pt-8 pb-6 flex justify-center items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img 
                    src={member.picture} 
                    alt={member.name} 
                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md transform group-hover:scale-105 transition-transform duration-300 z-10"
                />
            </div>

            {/* Card Body */}
            <div className="p-6 flex-1 flex flex-col justify-between text-left">
                <div>
                    <h3 className="text-xl font-bold text-gray-800 leading-snug mb-1 group-hover:text-[#1b7a53] transition-colors">
                        {member.name}
                    </h3>
                    
                    <p className="text-[#1b7a53] font-semibold text-sm mb-3">
                        {member.designation}
                    </p>

                    <span className="inline-block px-3 py-1 bg-emerald-50 text-[#1b7a53] rounded-full text-xs font-medium mb-4">
                        {member.committee_year}
                    </span>
                </div>

                {/* Social & Contact Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    {member.mail && (
                        <a 
                            href={`mailto:${member.mail}`} 
                            aria-label="Email"
                            className="w-9 h-9 rounded-full bg-gray-100 text-gray-600 hover:bg-[#1b7a53] hover:text-white transition-all transform hover:scale-110 flex items-center justify-center text-sm shadow-sm"
                        >
                            <FaEnvelope />
                        </a>
                    )}
                    {member.contact && (
                        <a 
                            href={`tel:${member.contact}`} 
                            aria-label="Phone"
                            className="w-9 h-9 rounded-full bg-gray-100 text-gray-600 hover:bg-[#1b7a53] hover:text-white transition-all transform hover:scale-110 flex items-center justify-center text-sm shadow-sm"
                        >
                            <FaPhoneAlt />
                        </a>
                    )}
                    {member.facebook && (
                        <a 
                            href={member.facebook} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Facebook"
                            className="w-9 h-9 rounded-full bg-gray-100 text-gray-600 hover:bg-[#1b7a53] hover:text-white transition-all transform hover:scale-110 flex items-center justify-center text-sm shadow-sm"
                        >
                            <FaFacebookF />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeamCard;