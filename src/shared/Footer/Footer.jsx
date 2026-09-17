import React from 'react';
import Logo from '../Logo/Logo';
import { FaMapMarkerAlt, FaEnvelope, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content pt-12 pb-6 px-4 md:px-12 border-t border-neutral-focus">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                
                {/* First Section: Logo & Query Text */}
                <div className="flex flex-col items-start gap-4">
                    <div className="">
                        <Logo />
                    </div>
                    <p className="text-neutral-content/80 text-sm md:text-base max-w-sm leading-relaxed">
                        If you have any query, please feel free to contact us. We are always here to help and protect our environment.
                    </p>
                </div>

                {/* Second Section: Quick Contact */}
                <div className="flex flex-col items-start md:items-end">
                    <div className="w-full md:w-auto">
                        <h3 className="text-lg font-bold text-emerald-400 mb-4 tracking-wide uppercase border-b-2 border-emerald-500 pb-1 inline-block">
                            Quick Contact
                        </h3>
                        <ul className="space-y-3 text-sm md:text-base text-neutral-content/90">
                            {/* Location */}
                            <li className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-emerald-400 shrink-0 text-lg" />
                                <span>Eskaton Garden Rd, Dhaka 1000</span>
                            </li>
                            {/* Mail */}
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-emerald-400 shrink-0 text-lg" />
                                <a 
                                    href="mailto:dsce.environmentclub.edu.bd@gmail.com" 
                                    className="hover:text-emerald-400 transition-colors"
                                >
                                    dsce.environmentclub.edu.bd@gmail.com
                                </a>
                            </li>
                            {/* Facebook Page */}
                            <li className="flex items-center gap-3 pt-1">
                                <FaFacebook className="text-blue-500 shrink-0 text-xl" />
                                <a 
                                    href="https://www.facebook.com/profile.php?id=100057342704009&sk=directory_contact_info" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:text-emerald-400 transition-colors font-medium underline underline-offset-4"
                                >
                                    Visit our Facebook Page
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* Divider Line */}
            <div className="border-t border-neutral-content/10 my-6"></div>

            {/* Bottom Copyright & Developed by Section */}
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-xs md:text-sm text-neutral-content/70 gap-3 text-center sm:text-left">
                <p>
                   Copyright © {new Date().getFullYear()} <span className='text-green-600 font-bold underline'>DScEEC</span> | All rights reserved.
                </p>
                <p>
                    Developed by{" "}
                    <a 
                        href="https://www.facebook.com/nahidkhan.niloy.1/" // এখানে তোমার ফেসবুক বা পোর্টফোলিও আইডি লিংক বসিয়ে দিও
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-emerald-400 font-semibold hover:underline"
                    >
                        Niloy
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;