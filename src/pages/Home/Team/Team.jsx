import React, { useEffect, useState } from 'react';
import TeamCard from './TeamCard';

const Team = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        fetch('/committee.json')
            .then((res) => res.json())
            .then((data) => setTeamMembers(data))
            .catch((err) => console.error("Error loading committee data:", err));
    }, []);

    return (
        <section className="max-w-7xl mx-auto my-12 px-4">
            {/* Main Outer Box with Light Shadow, Rounded Borders & Glassmorphic Background */}
            <div className="bg-gradient-to-b from-white via-emerald-50/20 to-white border border-emerald-100/60 rounded-3xl p-8 md:p-14 shadow-xl shadow-emerald-950/5">
                
                {/* Header Section with Colorful Text & Animation */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                        <span className="bg-gradient-to-r from-[#1b7a53] via-teal-500 to-emerald-600 bg-clip-text text-transparent animate-pulse">
                            Meet Our Team
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#1b7a53] to-teal-400 mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-600 max-w-xl mx-auto font-medium text-base md:text-lg">
                        Dedicated professionals committed to making a difference in our communities
                    </p>
                </div>

                {/* Team Cards Container - Centered Alignment */}
                <div className="flex flex-wrap justify-center gap-8 items-stretch">
                    {teamMembers.map((member) => (
                        <TeamCard key={member.id} member={member} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Team;