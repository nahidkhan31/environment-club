import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Active = () => {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    // CountUp dynamic import fallback handle korar jonno
    const CountUpComponent = CountUp.default || CountUp;

    return (
        <section ref={ref} className="max-w-6xl mx-auto my-12 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Card 1: Volunteer */}
                <div className="bg-[#f0f7f4] rounded-2xl p-10 text-center shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center items-center">
                    <h3 className="text-xl font-medium text-gray-700 mb-3">
                        Volunteer
                    </h3>
                    <div className="text-5xl font-extrabold text-[#1b7a53] my-2">
                        {inView ? (
                            <CountUpComponent start={0} end={200} duration={2.5} suffix="+" />
                        ) : (
                            '0+'
                        )}
                    </div>
                    <p className="text-gray-600 font-medium mt-2">
                        Team Members
                    </p>
                </div>

                {/* Card 2: Active */}
                <div className="bg-[#f0f7f4] rounded-2xl p-10 text-center shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center items-center">
                    <h3 className="text-xl font-medium text-gray-700 mb-3">
                        Active
                    </h3>
                    <div className="text-5xl font-extrabold text-[#1b7a53] italic my-2">
                        24/7
                    </div>
                    <p className="text-gray-600 font-medium mt-2">
                        Service Available
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Active;